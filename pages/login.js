import { authInitialProps } from '../lib/auth'

import Layout from '../components/layout'
import LoginForm from '../components/login-form'

class Login extends React.Component {
  render() {
    return (
      <Layout title="Login" auth={this.props.auth}>
        <LoginForm />
      </Layout>
    )
  }
}

Login.getInitialProps = authInitialProps()

export default Login
