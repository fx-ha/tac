export default function EventBody({
  body,
}: {
  body: {
    id: string
    value: string
  }[]
}): JSX.Element {
  return (
    <div>
      {body.map((item: { id: string; value: string }) => (
        <section
          className="mb-2"
          key={item.id}
          dangerouslySetInnerHTML={{ __html: item.value }}
        ></section>
      ))}
    </div>
  )
}
