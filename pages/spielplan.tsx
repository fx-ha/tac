import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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

  const getDates = (event, eventMonth) => {
    const dates = []
    dates.push(new Date(event.start_date))
    event.weitere.forEach((date) => {
      if (isSameMonth(new Date(date.value), eventMonth)) {
        dates.push(new Date(date.value))
      }
    })
    return dates
  }

  const getRelatedEvents = (events: EventType[], eventMonth: Date) => {
    const relatedEvents = []
    events.forEach((event) => {
      const start_date = new Date(event.start_date)
      let weitereAdded = false
      if (isSameMonth(start_date, eventMonth)) {
        relatedEvents.push({
          id: event.id,
          title: event.title,
          dates: getDates(event, eventMonth),
        })
      }
      event.weitere.forEach((date) => {
        const weitereDate = new Date(date.value)
        if (isSameMonth(weitereDate, eventMonth)) {
          if (!isSameMonth(weitereDate, start_date)) {
            if (!weitereAdded) {
              relatedEvents.push({
                id: event.id,
                title: event.title,
                dates: event.weitere.map((date) => {
                  if (isSameMonth(new Date(date.value), eventMonth)) {
                    return new Date(date.value)
                  }
                }),
              })
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

  return (
    <Layout>
      <Head>
        <title>{siteTitle} | spieplan</title>
      </Head>

      {eventMonthObjects.map((eventMonthObject, index) => (
        <div
          key={index}
          className={`mb-4 mx-sm-5 ${index % 2 === 0 ? 'text-right' : ''}`}
        >
          <h2 className="h1">{eventMonthObject.name}</h2>

          {index % 2 === 0 ? (
            <div>
              <Image
                src="/images/tac_C-19.png"
                alt="custom horizontal rule"
                width={2769}
                height={501}
                layout="responsive"
              />
              {eventMonthObject.events.map((event, index) => (
                <div key={index}>
                  <Link href={`/spielplan/${event.id}`}>
                    <a className="text-reset">{event.title}</a>
                  </Link>{' '}
                  {event.dates.map((date, index) => (
                    <span key={index} className="h2">
                      <Link href={`/spielplan/${event.id}`}>
                        <a className="text-reset">
                          {date.toLocaleString('de-DE', { day: '2-digit' })}
                        </a>
                      </Link>
                      {index < event.dates.length - 1 ? <span>/</span> : ''}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <Image
                src="/images/tac_C-19.png"
                alt="custom horizontal rule"
                width={2769}
                height={501}
                layout="responsive"
                className="flip"
              />
              {eventMonthObject.events.map((event, index) => (
                <div key={index}>
                  {event.dates.map((date, index) => (
                    <span key={index} className="h2">
                      <Link href={`/spielplan/${event.id}`}>
                        <a className="text-reset">
                          {date.toLocaleString('de-DE', { day: '2-digit' })}
                        </a>
                      </Link>
                      {index < event.dates.length - 1 ? <span>/</span> : ''}
                    </span>
                  ))}{' '}
                  <Link href={`/spielplan/${event.id}`}>
                    <a className="text-reset">{event.title}</a>
                  </Link>
                </div>
              ))}
            </div>
          )}
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
