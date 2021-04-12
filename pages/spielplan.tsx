import Head from 'next/head'
import { GetStaticProps } from 'next'

import { isSameMonth, set } from 'date-fns'

import Layout, { siteTitle } from '../components/Layout'
import EventList from '../components/EventList'
import { EventType } from '../lib/types'
import { getEventDates } from '../lib/dates'

const Spielplan = ({ events }: { events: EventType[] }): JSX.Element => {
  // let eventMonths = []
  // getEventDates(events).map((date) => {
  //   eventMonths = [
  //     ...eventMonths,
  //     date.toLocaleString('de-DE', { month: 'long' }),
  //   ]
  // })

  // type EventMonthType = {
  //   name: string
  //   firstDayOfMonth: Date
  //   events: []
  // }

  // we can't simply use an array of getMonth()
  // because it would show jan, nov, dec instead of nov, dec, jan
  // so we have to set each event date to e.g. 2nd day of month
  // convert to unix time
  // so that set can filter out duplicates
  // then convert back to js date object
  const eventMonths = [
    ...new Set(
      getEventDates(events).map((date) => {
        return set(new Date(), {
          year: date.getFullYear(),
          month: date.getMonth(),
          date: 2,
        }).getTime()
      })
    ),
  ].map((time) => new Date(time))

  eventMonths.unshift(new Date('January 2, 2022'))

  eventMonths.sort((a, b) => a.getTime() - b.getTime())

  console.log(eventMonths)

  eventMonths.map((eventMonth) => {
    console.log(
      `Monat: ${eventMonth.toLocaleString('de-DE', { month: 'long' })}`
    )
    events.map((event) => {
      if (isSameMonth(new Date(event.start_date), eventMonth)) {
        console.log(event.title)
      }
    })
  })

  // eventMonth object:
  // eventMonth date (set first date (1.month.number))
  // eventMonth name
  // eventMonth events:
  //   for event in events:
  //     if (isSameMonth(eventMonth.date, event.start_date)
  //       eventMonth.events.push(event)
  //     for weitereDate in weitere:
  //       if (isSameMonth(eventMonth.date, weitereDate))):
  //         eventMonth.events.push(event)

  return (
    <Layout>
      <Head>
        <title>{siteTitle} | spieplan</title>
      </Head>

      <EventList events={events} isArchived={false} />
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
