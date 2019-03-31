import Router from 'next/router'
import { loginUser } from '../lib/auth'

class LoginForm extends React.Component {
  state = {
    email: 'Shanna@melissa.tv',
    password: 'anastasia.net',
    error: '',
    loading: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    const { email, password } = this.state
    event.preventDefault()
    this.setState({ error: '', loading: true })
    loginUser(email, password).then(() => {
      Router.push('/profile')
    })
    .catch(this.showError)
  }

  showError = err => {
    const error = err.response && err.response.data || err.message
    this.setState({ error, loading: false })
  }

  render() {
    const { email, password, error, loading } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="email" name="email" value={email} onChange={this.handleChange} autoComplete="email" />
        </div>
        <div>
          <input type="password" name="password"  value={password} onChange={this.handleChange}  autoComplete="password" />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending' : 'Submit'}
        </button>
        {error && <p>{error}</p>}
      </form>
    )
  }
}

export default LoginForm
