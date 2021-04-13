import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { isSameMonth, set } from 'date-fns'

import Layout, { siteTitle } from '../components/Layout'
import { EventType } from '../lib/types'
import { getEventDates } from '../lib/dates'

const Spielplan = ({ events }: { events: EventType[] }): JSX.Element => {
  // we can't simply use an array of getMonth()
  // because it would show jan, nov, dec instead of nov, dec, jan
  // so we have to set each event date to e.g. 2nd day of month
  // convert to unix time
  // so that set can filter out duplicates
  // then convert back to js date object
  const eventMonths = [
    ...new Set(
      getEventDates(events).map((date) => {
        return set(new Date('1995-12-17T03:24:00'), {
          year: date.getFullYear(),
          month: date.getMonth(),
          date: 2,
        }).getTime()
      })
    ),
  ].map((time) => new Date(time))

  eventMonths.sort((a, b) => a.getTime() - b.getTime())

  const getRelatedEvents = (
    events: EventType[],
    eventMonth: Date
  ): EventType[] => {
    const relatedEvents = []
    events.forEach((event) => {
      const start_date = new Date(event.start_date)
      let weitereAdded = false
      if (isSameMonth(start_date, eventMonth)) {
        relatedEvents.push(event)
      }
      event.weitere.forEach((date) => {
        const weitereDate = new Date(date.value)
        if (isSameMonth(weitereDate, eventMonth)) {
          if (!isSameMonth(weitereDate, start_date)) {
            if (!weitereAdded) {
              relatedEvents.push(event)
              weitereAdded = true
            }
          }
        }
      })
    })
    return relatedEvents
  }

  const eventMonthObjects = []

  eventMonths.forEach((eventMonth) => {
    eventMonthObjects.push({
      name: eventMonth.toLocaleString('de-DE', { month: 'long' }),
      date: eventMonth,
      events: getRelatedEvents(events, eventMonth),
    })
  })

  // TODO add eventDates of event in eventMonthObject

  return (
    <Layout>
      <Head>
        <title>{siteTitle} | spieplan</title>
      </Head>

      {eventMonthObjects.map((eventMonthObject, index) => (
        <div key={index} className="mb-4">
          <h2>{eventMonthObject.name}</h2>
          {eventMonthObject.events.map((event: EventType, index: string) => (
            <div key={index}>
              <span>
                {isSameMonth(new Date(event.start_date), eventMonthObject.date)
                  ? new Date(event.start_date).getDate()
                  : ''}{' '}
              </span>
              {event.weitere.map((date) => (
                <span>
                  {isSameMonth(new Date(date.value), eventMonthObject.date)
                    ? new Date(date.value).getDate()
                    : ''}{' '}
                </span>
              ))}
              <Link href={`/spielplan/${event.id}`}>
                <a className="text-reset">{event.title}</a>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}?type=event.EventPage&child_of=3&fields=start_date,weitere,short_description,preview_image`
  )
  const eventJson = await res.json()
  const events = eventJson.items

  return {
    props: {
      events,
    },
    revalidate: 10,
  }
}

export default Spielplan
