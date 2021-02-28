import Link from 'next/link'
import { useRouter } from 'next/router'

const BigNavLink = ({targetUrl, targetName}) => {
  const router = useRouter()

  return (
    <Link href={targetUrl}>
      <a className={`big-nav-link ${router.pathname === targetUrl ? 'active-nav' : 'text-body'}`}>{targetName}</a>
    </Link>
  )
}

export default BigNavLink
