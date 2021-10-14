const FbIcon = ({
  className,
  href,
  title,
}: {
  className?: string
  href: string
  title: string
}) => {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 60.73 60.73"
      >
        <defs />
        <path d="M57.38 0H3.35A3.35 3.35 0 000 3.35v54.03c0 1.85 1.5 3.35 3.35 3.35h29.09V37.21h-7.92v-9.16h7.92v-6.76c0-7.85 4.79-12.12 11.78-12.12 3.36 0 6.24.25 7.08.36v8.2h-4.86c-3.8 0-4.54 1.81-4.54 4.46v5.85h9.08l-1.19 9.17H41.9v23.52h15.48c1.85 0 3.35-1.5 3.35-3.35V3.35c0-1.85-1.5-3.35-3.35-3.35z" />
      </svg>
    </a>
  )
}

export default FbIcon
