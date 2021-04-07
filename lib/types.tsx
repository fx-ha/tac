export type EventType = {
  id: string
  title: string
  short_description: string
  start_date: string
  weitere: { type: string; value: string; id: string }[]
  preview_image: { meta: { download_url: string }; title: string }
}
