import Router from 'next/router'

class LoginForm extends React.Component {
  state = {
    email: 'Shanna@melissa.tv',
    password: 'anastasia.net'
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    const { email, password } = this.state
    event.preventDefault()
    loginUser(email, password).then(() => {
      Router.push('/profile')
    })
  }

  render() {
    const { email, password } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="email" name="email" value={email} onChange={this.handleChange} autoComplete="email" />
        </div>
        <div>
          <input type="password" name="password"  value={password} onChange={this.handleChange}  autoComplete="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default LoginForm
