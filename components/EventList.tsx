import Link from 'next/link'

export default function EventList({
  events,
  isArchived,
}: {
  events: {
    id: string
    title: string
  }[]
  isArchived: boolean
}): JSX.Element {
  const href = isArchived ? '/archiv/[id]' : '/spielplan/[id]'
  const slug = isArchived ? 'archiv' : 'spielplan'

  return (
    <div>
      <ul>
        {events.map((event: { id: string; title: string }) => (
          <li key={event.id}>
            <Link href={href} as={`/${slug}/${event.id}`}>
              <a>{event.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
