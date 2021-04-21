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
        <div key={index} className="month-block mx-sm-5">
          {index % 2 === 0 ? (
            // month right
            <div className="text-right">
              <div className="month-w-custom-hr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  viewBox="0 0 2720 473"
                  className="custom-hr-right"
                >
                  <defs />
                  <path d="M159.7 4.8c-1.5 1.7-1.7 6.1-1.7 43.4 0 47.7.8 44.2-10.1 45.9-19.8 3.1-41 11.4-57.4 22.4-10.1 6.8-10.1 6.8-13.4 5.1-1.6-.9-13.8-12.8-27.2-26.7-13.4-13.8-25.6-25.7-27.1-26.5-3.7-1.9-6.2-.7-12.4 5.8-5.9 6.1-7.7 9.1-7 11.6.3.9 16.7 17.8 36.5 37.6 28.6 28.6 36.4 35.8 38.4 35.8 1.9 0 5.1-2.3 11.4-8.2 26.2-24.5 57.4-35.4 91.6-32.1 30 2.9 52.2 13.3 72.7 34 36.8 37 45.3 89.6 21.9 136.2-35.7 71.2-129.3 86.6-187.4 30.7-7.9-7.5-9.6-8.5-12.8-7.2-2.5.9-72.4 72.8-73.1 75.2-.6 1.9.4 3.4 6.1 9.4 5.4 5.4 7.6 7 9.7 7 2.4.1 7.5-4.6 30.5-27.6C65 360.5 77.3 349 78.4 349c1 0 5.9 2.7 10.9 6.1 17.4 11.6 33.1 18.1 54 22.4 6.6 1.3 12.5 2.9 13.1 3.5.8.8 1.2 14.6 1.4 43.5l.3 42.5 2.4 1.6c3.8 2.5 21.1 1.7 23.1-1 1.2-1.6 1.4-9.3 1.4-43.6 0-38.5.1-41.8 1.8-43.2.9-.8 5.7-2.3 10.6-3.2 19.1-3.7 36.7-11 53.2-22.1 5.4-3.6 10.7-6.5 11.8-6.5 1.4 0 11.6 9.5 31.1 29 23 23.1 29.5 29 31.6 29 1.9 0 4.5-2 9.7-7.4 4-4.1 7.2-8.2 7.2-9.2s-12.7-14.5-29.5-31.4c-16.2-16.3-29.5-30.3-29.5-31.1 0-.7 3-5.9 6.6-11.4 11.4-17.4 18.6-34.8 22-53.7 1.2-6.4 2.3-9.8 3.7-11.1 1.8-1.6 60.4-1.7 1199.7-1.7h1197.7l1.9-2.1c2.7-3 2.8-20.9.1-23.6-1.7-1.7-50.7-1.8-1199.5-1.4-1031.4.3-1198 .1-1199.5-1.1-1.3-.9-2.5-4.6-3.8-11.3-4-20.2-11.4-38.1-22.3-54.5-3.1-4.6-5.6-9.2-5.6-10.4 0-1.4 9.7-11.7 29-31.1 21.8-21.8 29-29.7 29-31.5 0-1.6-2.2-4.6-6.8-9.2-5.4-5.3-7.5-6.8-9.8-6.8-2.5 0-7 4.1-31.4 28.5-15.7 15.7-29.1 28.5-29.9 28.5-.8 0-8-3.8-16-8.5-17.7-10.2-25-13.3-45.1-19.1-9.2-2.6-16-5.1-16.7-6.1-1-1.3-1.3-11.5-1.3-42.8 0-38.6-.1-41.3-1.8-42.8-2.8-2.6-21.2-2.4-23.5.1z" />
                </svg>
                <h2 className="month-title month-title-right">
                  {eventMonthObject.name}
                </h2>

                <div className="month-content month-content-right">
                  {eventMonthObject.events.map((event, index) => (
                    <div key={index}>
                      <Link href={`/spielplan/${event.id}`}>
                        <a className="text-reset">{event.title}</a>
                      </Link>{' '}
                      {event.dates.map((date, index) => (
                        <span key={index} className="spielplan-date">
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
              </div>
            </div>
          ) : (
            // month left
            <div>
              <div className="month-w-custom-hr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  viewBox="0 0 2720 473"
                  className="custom-hr-left"
                >
                  <defs />
                  <path d="M159.7 4.8c-1.5 1.7-1.7 6.1-1.7 43.4 0 47.7.8 44.2-10.1 45.9-19.8 3.1-41 11.4-57.4 22.4-10.1 6.8-10.1 6.8-13.4 5.1-1.6-.9-13.8-12.8-27.2-26.7-13.4-13.8-25.6-25.7-27.1-26.5-3.7-1.9-6.2-.7-12.4 5.8-5.9 6.1-7.7 9.1-7 11.6.3.9 16.7 17.8 36.5 37.6 28.6 28.6 36.4 35.8 38.4 35.8 1.9 0 5.1-2.3 11.4-8.2 26.2-24.5 57.4-35.4 91.6-32.1 30 2.9 52.2 13.3 72.7 34 36.8 37 45.3 89.6 21.9 136.2-35.7 71.2-129.3 86.6-187.4 30.7-7.9-7.5-9.6-8.5-12.8-7.2-2.5.9-72.4 72.8-73.1 75.2-.6 1.9.4 3.4 6.1 9.4 5.4 5.4 7.6 7 9.7 7 2.4.1 7.5-4.6 30.5-27.6C65 360.5 77.3 349 78.4 349c1 0 5.9 2.7 10.9 6.1 17.4 11.6 33.1 18.1 54 22.4 6.6 1.3 12.5 2.9 13.1 3.5.8.8 1.2 14.6 1.4 43.5l.3 42.5 2.4 1.6c3.8 2.5 21.1 1.7 23.1-1 1.2-1.6 1.4-9.3 1.4-43.6 0-38.5.1-41.8 1.8-43.2.9-.8 5.7-2.3 10.6-3.2 19.1-3.7 36.7-11 53.2-22.1 5.4-3.6 10.7-6.5 11.8-6.5 1.4 0 11.6 9.5 31.1 29 23 23.1 29.5 29 31.6 29 1.9 0 4.5-2 9.7-7.4 4-4.1 7.2-8.2 7.2-9.2s-12.7-14.5-29.5-31.4c-16.2-16.3-29.5-30.3-29.5-31.1 0-.7 3-5.9 6.6-11.4 11.4-17.4 18.6-34.8 22-53.7 1.2-6.4 2.3-9.8 3.7-11.1 1.8-1.6 60.4-1.7 1199.7-1.7h1197.7l1.9-2.1c2.7-3 2.8-20.9.1-23.6-1.7-1.7-50.7-1.8-1199.5-1.4-1031.4.3-1198 .1-1199.5-1.1-1.3-.9-2.5-4.6-3.8-11.3-4-20.2-11.4-38.1-22.3-54.5-3.1-4.6-5.6-9.2-5.6-10.4 0-1.4 9.7-11.7 29-31.1 21.8-21.8 29-29.7 29-31.5 0-1.6-2.2-4.6-6.8-9.2-5.4-5.3-7.5-6.8-9.8-6.8-2.5 0-7 4.1-31.4 28.5-15.7 15.7-29.1 28.5-29.9 28.5-.8 0-8-3.8-16-8.5-17.7-10.2-25-13.3-45.1-19.1-9.2-2.6-16-5.1-16.7-6.1-1-1.3-1.3-11.5-1.3-42.8 0-38.6-.1-41.3-1.8-42.8-2.8-2.6-21.2-2.4-23.5.1z" />
                </svg>
                <h2 className="month-title">{eventMonthObject.name}</h2>

                <div className="month-content">
                  {eventMonthObject.events.map((event, index) => (
                    <div key={index}>
                      {event.dates.map((date, index) => (
                        <span key={index} className="spielplan-date">
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
              </div>
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
