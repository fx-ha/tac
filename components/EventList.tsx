import Link from 'next/link'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import { EventType } from '../lib/types'

const EventList = ({
  events,
  isArchived,
}: {
  events: EventType[]
  isArchived: boolean
}) => {
  const path = isArchived ? 'archiv' : 'spielplan'

  return (
    <div>
      <Row>
        {events.length === 0 ? (
          <Col>Es wurden noch keine Veranstaltungen eingetragen.</Col>
        ) : (
          events.map((event) => (
            <Col key={event.id} sm={12} className="mb-4">
              <Row>
                <Col sm={3} className="mb-lg-2">
                  <Link href={`/${path}/${event.id}`}>
                    <a>
                      {event.preview_image !== null ? (
                        <Image
                          src={event.preview_image.meta.download_url}
                          alt={event.preview_image.title}
                          width={16}
                          height={9}
                          layout="responsive"
                          objectFit="cover"
                        />
                      ) : (
                        <Image
                          src="/images/TaCLogo_transparent.png"
                          alt="tac logo"
                          width={16}
                          height={9}
                          layout="responsive"
                          objectFit="cover"
                        />
                      )}
                    </a>
                  </Link>
                </Col>
                <Col className="mt-2 mt-sm-0">
                  <Link href={`/${path}/${event.id}`}>
                    <a className="text-body">
                      <h3>{event.title}</h3>
                    </a>
                  </Link>
                  <div>
                    {new Date(event.start_date).toLocaleDateString('de-DE', {
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="mt-1">{event.short_description}</div>
                </Col>
              </Row>
            </Col>
          ))
        )}
      </Row>
    </div>
  )
}

export default EventList
