import Link from 'next/link'

const EventList = ({
  events,
  isArchived,
}: {
  events: {
    id: string
    title: string
  }[]
  isArchived: boolean
}): JSX.Element => {
  const path = isArchived ? 'archiv' : 'spielplan'

  return (
    <div>
      <ul>
        {events.map((event: { id: string; title: string }) => (
          <li key={event.id}>
            <Link href={`/${path}/${event.id}`}>
              <a>{event.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventList
