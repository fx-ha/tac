const TacHeader = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 4293 498"
    >
      <defs />
      <path d="M2661.1 4.3c-.7 1-1.2 17.2-1.3 54.2l-.3 52.8-11 2.7c-16.9 4.2-30.8 10.5-42.3 19.1-2.9 2.2-6.1 3.9-7.1 3.7-1-.2-20.2-15.7-42.7-34.6-24.9-20.9-41.6-34.2-42.9-34.2-2.7 0-23.5 20.8-23.5 23.6 0 1.4 12 12.2 42.5 37.9 23.4 19.7 42.5 36.4 42.5 37.1 0 .7-.9 2.8-1.9 4.6-5.8 10-12.9 33.9-15.2 51.3l-1.2 9.5h-60.8c-59.1 0-60.9.1-61.9 1.9-.6 1.1-1 8.9-1 18.1 0 9.2.4 17 1 18.1 1 1.8 2.8 1.9 61.8 1.9h60.8l1.7 11.2c2.2 13.5 6.4 27 12.5 40.1l4.5 9.8-2.9 3c-1.6 1.7-19.9 19.1-40.6 38.7-20.8 19.6-37.8 36.4-37.8 37.2 0 2 22.1 24 24.1 24 .9 0 19.3-16.6 40.9-37 21.5-20.4 39.7-37 40.4-37 .6 0 3.8 2 7 4.4 11.7 8.7 32.9 17.9 46.6 20.1 2.5.4 5.1 1.2 5.8 1.7.9.8 1.2 12.7 1.2 53.2 0 28.6.4 52.7.8 53.4.7.9 5.1 1.2 18.8 1l17.9-.3.5-52.4c.4-45.2.7-52.5 2-53.2.8-.4 6.4-1.5 12.4-2.4 17.8-2.7 36.8-9.7 49.6-18.4 2.5-1.7 5.3-3.1 6.2-3.1 1 0 17 13.1 35.5 29.1 18.6 16 34.8 29.8 36 30.6 1.3.9 2.8 1.1 3.7.6 2.3-1.3 21.6-23.6 21.6-25 0-.7-19.7-18.2-43.7-39-24.1-20.8-46.4-40.2-49.5-43-3.2-2.9-6.5-5.3-7.4-5.3-2.5 0-5.5 2-11.7 7.6-15.8 14.6-38.4 22.4-64.9 22.4-18.6 0-32.1-4-46.4-13.8-6.7-4.5-17.4-15.4-22.2-22.3-15.3-22.6-20.6-52.6-14.6-84 7-36.8 30.9-61.4 65.6-67.5 10.1-1.8 28.9-1.5 40.3.6 16.7 3.1 34 10.4 47 19.9 3.8 2.8 7.9 5.1 9.1 5.1 2.5 0 4.8-1.9 57.8-47.5 21.7-18.7 39.7-34.6 40.1-35.4.7-1.8-.6-3.7-11.4-15.9-5.7-6.3-9.9-10.2-11.1-10.2-1.1 0-16.5 12.5-35.7 29.1-18.6 16-34.8 29.8-36.1 30.6-2.1 1.4-2.6 1.3-8.5-2.5-14.4-9.5-31.9-15.8-51.4-18.7-5.9-.9-11.1-2.1-11.5-2.8-.4-.7-.8-24.2-.8-52.3 0-38.3-.3-51.3-1.2-52.2-1.8-1.8-34.2-1.7-35.7.1zM193 211v167h52.9l.3-77.3c.4-75.8.4-77.3 2.6-85.2 7.5-27.3 25.7-45.1 49.5-48.5 21.7-3.1 39.8 5.1 47.2 21.3 6.2 13.5 5.9 9.2 6.3 103.5l.3 86.2H406v-79.3c0-43.5-.5-85.1-1-92.3-3.5-45.8-24.4-73.5-62.6-83.1-10.6-2.7-36.2-2.4-46.8.5-16.6 4.6-31.8 14-43.4 26.9l-6.2 6.8V44h-53v167zM37 96v33H2l.2 19.7.3 19.8 17.2.3 17.2.2.3 82.8c.4 92.1 0 86.9 7.4 102.1 7 14.2 21 24.4 39.4 28.6 17.2 4 44.9 2.8 66.2-2.8l8.3-2.2.3-21.3c.2-20 .1-21.3-1.5-20.8-10.9 3.4-33 6.1-41.8 5.1-9.3-1-13.6-2.6-18.1-7-7.6-7.3-7.4-4.8-7.4-89.7V169h63v-40H90V63H37v33zM989 96v33h-34v40h33.9l.3 81.7c.4 80.6.4 81.9 2.6 89.6 6.3 22.5 19.6 35.5 42.9 41.9 6.6 1.8 10.7 2.1 26.8 2.2 19.1.1 30.5-1.4 45.6-5.8l4.4-1.3.3-21.3c.2-18.5 0-21.2-1.3-20.7-.8.4-6.1 1.5-11.7 2.6-36.2 6.8-52.1 1.6-55.7-18.3-.7-3.9-1.1-31-1.1-78.3V169l31.8-.2 31.7-.3.3-19.8.2-19.7h-64V63h-53v33zM548.5 122.1c-30.2 3.9-56.6 18.6-73.5 41.1-13 17.2-21.6 39.4-25 64.7-1.7 12.2-1.4 37.7.5 50.4 4.5 30.3 18 57.7 37.3 75.9 15.5 14.6 32.7 23.3 56.2 28.4 11.7 2.6 42.6 2.6 55.3.1 25.7-5.2 45.5-15.4 62.3-32.1 8.8-8.9 18.9-22.5 17.6-23.8-1-1-41.2-21.8-42.2-21.8-.4 0-2.4 2.5-4.4 5.5-8.4 12.7-21.3 22.3-36.1 27.1-10.8 3.5-28.4 4.4-40.6 2-30.3-5.9-48.8-29.3-51.7-65.4l-.8-9.2H682v-11.8c-.1-72.5-37.3-122.6-97.5-131.2-8.3-1.2-26.3-1.1-36 .1zm35.8 43.5c23 5.5 39.1 26.3 42.3 54.5l.7 5.9H503.7l.7-6.7c1.9-18.6 12.2-36.5 26.3-45.9 13.7-9.1 35.2-12.3 53.6-7.8zM804.5 121.6c-21.3 2.3-40.4 8.5-53.2 17.2-7 4.7-17.1 15.3-20.9 21.8-5.4 9.2-10.4 26.7-10.4 36.5v3.9h51l.4-2.3c.3-1.2.7-4.4 1-7 1.2-10.2 7.9-19.8 16.9-24.4 7.7-3.8 16.5-5.3 33.2-5.3 21.9 0 30.9 2.3 38.8 9.8 6.2 6 8 12.2 8.5 29.8l.4 15.2-3.8.6c-2.2.3-17.4 2.2-33.8 4.1-16.5 1.9-35.4 4.6-42.1 6-55.9 11.3-82.2 38.9-80.2 83.9.6 14.2 2.3 21.2 7.7 32.1 13.9 28.3 43.5 43 83 41.2 26.6-1.2 49.3-10.7 64.6-26.9l5.1-5.4 1.2 6.6c.6 3.6 2.1 9.3 3.2 12.8l2.1 6.2h54.7l-1.5-3.5c-2.6-6.4-5.3-19.8-6.3-32-.6-6.8-1.1-42.7-1.1-83.2 0-76.3-.1-78.4-5.2-92.3-4.7-13-15.5-25.4-28.1-32.4-7.8-4.4-21.6-9-33.2-11.1-8.8-1.6-43-2.8-52-1.9zM870 273.7c0 10.4-.5 20.8-1.1 23.3-3.1 13.4-15 28.2-28.4 35.2-18.7 9.7-42.5 11.3-58.2 3.7-11.2-5.4-16.3-14.1-17.1-29-1-21.2 7.6-32.6 30.2-39.8 11.6-3.6 17.3-4.7 48-8.6 13.8-1.8 25.4-3.3 25.9-3.4.4 0 .7 8.3.7 18.6zM1227.1 122c-25.9 3.6-47.9 14.1-64.5 30.7-16.9 16.9-27.5 38.6-33.3 67.8-2.5 12.8-2.5 49.2 0 62 9.7 49.3 36.3 82.1 77.7 95.9 31.9 10.6 71.7 8.3 101.6-5.8 11.8-5.6 19.8-11.1 29.1-19.9 7.2-6.9 20.3-23.1 20.3-25.2-.1-1.6-42.8-23.1-43.7-22-.5.6-2.6 3.6-4.8 6.8-8.8 13.3-25.5 24-42.5 27.3-9.9 2-29.1 1.4-38-1-20.1-5.6-34.7-19.9-42.1-41.3-2.2-6.6-4.9-21.7-4.9-28.1V265h178v-14.3c0-45.2-16.3-84.2-44.6-106.7-12.9-10.3-25.5-16.3-42.4-20.1-9.8-2.3-35.6-3.3-45.9-1.9zm33.9 43.2c6.7 1.2 16.2 5.6 21.8 10 4.9 3.9 11.4 12.2 14.9 19.2 3 5.9 7.3 22.3 7.3 27.7v3.9h-123v-2.9c0-5.5 4.9-22.2 8.7-29.3 6.7-12.9 20.6-24.2 34.3-27.8 10.5-2.8 23.7-3.1 36-.8zM1512.5 122.5c-20.1 4.4-37.5 17.1-50.4 36.9l-5.1 7.9V128h-53v250h53v-57.9c0-31.8.5-63.6 1-70.7 2.8-35 14-55.9 35.6-66.7 8.9-4.5 15.9-5.8 33.2-6.4l16.2-.6v-53.4l-3.7-.7c-6.2-1-20.4-.5-26.8.9zM1768.5 121.6c-19.5 2.7-28.2 4.7-39.1 9.2-19.3 8-33.5 22-40.7 40.3-2.6 6.4-5.7 21.3-5.7 27v2.9h51.7l.6-6.6c1.6-17.3 12.4-28.3 31-31.5 9.5-1.6 38.6-.7 45.2 1.4 9.2 3 13.9 6.8 17.6 14.3 3.4 6.8 3.4 7.1 3.8 22.5l.3 15.7-3.8.6c-2.2.3-17.3 2.2-33.7 4.1-35.4 4.2-47.1 6.3-63.1 11.6-38 12.5-57.1 34.7-59.3 69-1 16.2 2.6 32.8 9.8 45.7 4.4 7.8 17.9 21 25.9 25.5 3.6 2 10.6 4.9 15.5 6.6 24.1 8 56 6.3 78.8-4.2 9.7-4.5 15.6-8.6 23.9-16.5l6.6-6.4 1.2 5.9c.6 3.2 2.1 8.8 3.2 12.5l2.1 6.8h54.5l-2.4-7.6c-5.2-16.2-5.4-20.3-5.4-97.9 0-39.6-.5-76.5-1-81.9-2.1-21-7.1-32.8-19.5-45.1-11.6-11.7-25.2-18.1-47.3-22.1-8.3-1.5-43.7-2.8-50.7-1.8zm64.5 152.8c0 16.5-.3 20.3-2 25.8-4.2 13.7-15.1 25.8-29.3 32.8-11.5 5.6-19.1 7.4-32.2 7.4-26.7 0-39.9-10.7-41.3-33.5-1.1-19.7 7.3-31.5 27.6-38.9 10.2-3.7 19.6-5.5 50.2-9.5 14-1.8 25.8-3.3 26.3-3.4.4-.1.7 8.6.7 19.3zM2052.5 121.6c-1.1.2-4.5.9-7.5 1.5-14.6 2.9-30.6 12.3-41.9 24.6l-7.1 7.7V128h-52v250h53v-75.9c0-64.7.2-77.1 1.6-84.1 4.8-25.4 18.4-42.9 38.4-49.6 7.9-2.6 23.5-2.4 31.1.5 11.5 4.4 18.4 13.8 22.2 30.4 2 8.9 2.1 12.1 2.4 93.9l.4 84.8h52.8l.4-77.8c.4-87.7.2-84.9 8.2-102 10.8-22.8 31.8-34.8 54.6-31.3 21.4 3.3 30 16.3 32.8 49.5.7 7.7 1.1 41.9 1.1 87.2V378h53v-84.5c0-53.6-.4-88.1-1.1-94.2-4.5-40.9-23.6-66.4-56.5-75.5-11.4-3.1-38.2-3.1-49.8 0-10.3 2.8-21.6 7.8-29.1 12.7-6.2 4.1-18.3 15.5-22.6 21.4l-2.4 3.3-5.2-8c-9.5-14.5-23.9-24.8-41-29.3-7.5-2-30.8-3.5-35.8-2.3z" />
      <path d="M2952.5 121.6c-14.2 1.6-30.9 5.8-41.1 10.4-13.8 6.2-27.9 18.9-34.2 30.7-4 7.6-7.9 21.2-8.8 30.8l-.7 7.5h51.3l.4-2.3c.3-1.2.8-4.5 1.1-7.2 1.9-14.6 12-24.6 28.4-28.1 4-.8 12.5-1.4 21.6-1.4 22 0 32.1 2.6 39.1 10.2 6.5 6.8 8.4 14.2 8.4 32.3v12.3l-3.7.6c-2.1.3-17.3 2.2-33.7 4.1-34.3 4-49.9 6.9-64.6 12-33.5 11.7-50.9 29.4-56.6 57.8-2.2 10.7-1.5 29.1 1.6 39.7 10.3 35.9 42.9 55.8 88 53.7 26.6-1.2 49.3-10.7 64.6-26.9l5.1-5.4 1.2 6.6c.6 3.6 2.1 9.3 3.2 12.8l2.1 6.2h54.7l-1.5-3.5c-2.7-6.6-5.3-20-6.4-32.9-.5-7.2-1-43.7-1-83.2 0-74.6-.1-77.1-4.9-90.7-3.1-9-8.5-17-16.1-24-11-10.2-25.1-16.4-45.6-20.2-8.7-1.6-42.9-2.8-51.9-1.9zm65.5 152.1c0 10.4-.5 20.8-1.1 23.3-3.1 13.4-15 28.2-28.4 35.2-18.7 9.7-42.5 11.3-58.2 3.7-11.2-5.4-16.3-14.1-17.1-29-1-21.2 7.6-32.6 30.2-39.8 11.6-3.6 17.3-4.7 48-8.6 13.8-1.8 25.4-3.3 25.9-3.4.4 0 .7 8.3.7 18.6zM3241.5 121.6c-1.1.2-4.5.9-7.5 1.5-14.6 2.9-30.6 12.3-41.9 24.6l-7.1 7.7V128h-52v250h53v-75.8c0-47.9.4-78.1 1.1-82.1 3.3-20.6 13.7-38 27.9-46.5 9-5.4 15.1-7 26.5-6.9 21.7.2 32.5 9.5 37.8 32.6 2 8.9 2.1 12.2 2.4 93.9l.4 84.8h52.8l.4-77.8c.4-83.9.3-83.4 5.9-97.2 10.4-25.9 32.3-39.8 56.9-36.1 21.5 3.4 30.1 16.5 32.8 50.2.7 7.8 1.1 43.8 1.1 87.1V378h53v-84c0-54.5-.4-87.5-1.1-94.2-1.5-14.3-5.2-27.6-10.6-38.8-3.9-8-5.9-10.8-13.7-18.5-10.2-10.2-18.2-14.8-32.2-18.7-11.4-3.1-38.2-3.1-49.8 0-10.3 2.8-21.6 7.8-29.1 12.7-6.2 4.1-18.3 15.5-22.6 21.4l-2.4 3.3-5.2-8c-9.5-14.5-23.9-24.8-41-29.3-7.5-2-30.8-3.5-35.8-2.3zM3649.7 122.5c-20 3.8-34.5 11.5-49.9 26.4l-5.8 5.5V128h-52v328h53V352.6l5.1 5.7c14.1 15.9 35.6 25.2 60.9 26.4 50.1 2.5 89.9-26.4 107.1-77.7 13.8-41.4 10.8-91.6-7.8-128.3-7.9-15.8-22.4-32.1-36.8-41.5-8.5-5.6-19.3-10.2-31.5-13.4-10.2-2.6-31.7-3.3-42.3-1.3zm22.6 45c19.4 4.1 34.8 18.7 42.8 40.5 4.8 13.2 6.3 24.1 6.3 44.5-.1 20.3-2.1 32.5-7.5 46.7-10.7 27.6-34.6 43.6-61.7 41.3-32.3-2.7-53.1-26.9-58.1-67.5-1.5-11.9-1.3-31.8.4-43 3.5-23.2 12.5-41.1 26.4-52.1 5.9-4.7 16-9.4 22.7-10.7 7.5-1.5 21.2-1.3 28.7.3zM4162.2 122.1c-39.1 5.3-66.8 24.3-75.8 52.2-5.1 15.8-4.2 36.6 2.1 50.5 10.1 22 34.6 37 72.5 44.1 5.8 1.1 16.7 3.2 24.4 4.6 24.4 4.6 38.6 10.2 45.2 17.9 4 4.6 5.4 9 5.4 16.7 0 16.2-11.1 26.9-32.5 31.5-11 2.3-35.1 2.3-46 0-20.7-4.5-38.5-13.6-52.9-27.1l-5-4.6-16.4 16.4-16.5 16.5 5.4 5.1c20.4 19.6 46.7 31.8 80.4 37.3 4.9.8 16.6 1.3 30 1.3 18.9 0 23.6-.4 33.3-2.3 24.4-4.9 40.6-12.8 54.2-26.2 14.4-14.2 20.3-29.3 20.2-51-.2-41.2-24.4-64-79-74.5-38.1-7.3-44.4-8.6-51.9-11-10.4-3.2-17.1-7.7-20.3-13.5-3.3-6.1-3.5-17.4-.3-23.6 6.1-11.6 22.5-18.4 44.3-18.4 24.2 0 46.2 7.3 64.7 21.5l7.2 5.4 15.1-15.7 15.2-15.7-5.3-4.8c-16.2-15-41-26.6-66.9-31.3-10.3-1.9-40.6-2.7-50.8-1.3zM3820 219.4c0 99.7 0 100 5.8 116.4 4 11.3 8.5 18.5 17.3 27.3 13.4 13.6 31.6 20.5 56.4 21.6 10.6.4 14.8.1 22.5-1.5 18.1-3.7 33.8-12.1 47-25l7-6.9V378h53V128h-52.9l-.3 79.7c-.3 77-.4 80-2.4 86.8-6.3 21.5-20.2 36.2-39.9 42.1-8.1 2.4-26.7 2.5-34.5.2-11.8-3.6-18.9-10.9-23.3-23.8l-2.2-6.5-.3-89.3-.3-89.2H3820v91.4z" />
    </svg>
  )
}

export default TacHeader
