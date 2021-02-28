import Link from 'next/link'
import { useRouter } from 'next/router'

import { Nav } from 'react-bootstrap'

const SmallNavLink = ({
  targetUrl,
  targetName,
}: {
  targetUrl: string
  targetName: string
}): JSX.Element => {
  const router = useRouter()

  return (
    <Link href={targetUrl} passHref>
      <Nav.Link
        className={`${router.pathname === targetUrl ? 'active-nav' : ''}`}
      >
        {targetName}
      </Nav.Link>
    </Link>
  )
}

export default SmallNavLink
