import { EventType } from './types'
//import { formatDistance, subDays } from 'date-fns'

export const getEventDates = (events: EventType[]): Date[] => {
  const eventDates = []
  events.map((event) => {
    eventDates.push(new Date(event.start_date))
    event.weitere.map((date) => {
      eventDates.push(new Date(date.value))
    })
  })
  return eventDates
}

// get unique play dates
//   set hours to 0 https://stackoverflow.com/a/38050824/15117428
//   return [...new Set(playDates)]

// new Date(apiDateString).toLocaleDateString(
//   'de-DE',
//   {
//     month: 'long',
//     day: 'numeric',
//   }
// )

/* <p>
  {convertToJsDate(event.start_date).toLocaleDateString(
    'de-DE',
    {
      month: 'long',
      day: 'numeric',
    }
  )}
  {(() => {
    if (event.end_date !== '') {
      return ` bis ${convertToJsDate(
        event.end_date
      ).toLocaleDateString('de-DE', {
        month: 'long',
        day: 'numeric',
      })}`
    }
  })()}
</p> */
