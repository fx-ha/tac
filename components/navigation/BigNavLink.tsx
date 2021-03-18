import Link from 'next/link'
import { useRouter } from 'next/router'

const BigNavLink = ({
  targetUrl,
  targetName,
}: {
  targetUrl: string
  targetName: string
}): JSX.Element => {
  const router = useRouter()

  return (
    <Link href={targetUrl}>
      <a
        className={`${
          router.pathname === targetUrl ? 'active-nav' : 'text-body'
        }`}
      >
        {targetName}
      </a>
    </Link>
  )
}

export default BigNavLink
