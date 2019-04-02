import Link from 'next/link'
import { authInitialProps } from '../lib/auth'

import Layout from '../components/layout'

class Index extends React.Component {
  render() {
    return (
      <Layout title="Home" auth={this.props.auth}>
        <Link href="profile">
          <a>Go to profile.</a>
        </Link>
      </Layout>
    )
  }
}

Index.getInitialProps = authInitialProps()

export default Index
