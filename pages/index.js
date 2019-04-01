import Link from 'next/link'

import Layout from '../components/layout'

const Page = () => {
  return (
    <Layout title="Home">
      <Link href="profile">
        <a>Go to profile.</a>
      </Link>
    </Layout>
  )
}

export default Page