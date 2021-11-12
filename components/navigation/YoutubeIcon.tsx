const YoutubeIcon = ({ href, title }: { href: string; title: string }) => (
  <a href={href} title={title} target="_blank" rel="noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 242.667 242.667"
    >
      <path d="m106.955 94.325 39.161 27.008-39.161 27.008V94.325zM242.667 0v242.667H0V0h242.667zM190.25 101.494c0-16.378-13.277-29.655-29.655-29.655H82.072c-16.378 0-29.655 13.277-29.655 29.655v39.679c0 16.378 13.277 29.655 29.655 29.655h78.523c16.378 0 29.655-13.277 29.655-29.655v-39.679z" />
    </svg>
  </a>
)

export default YoutubeIcon
