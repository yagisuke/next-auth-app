import loginUser from '../lib/auth'

export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    const { email, password } = this.state

    event.preventDefault()
    loginUser(email, password)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="email" name="email" onChange={this.handleChange} autoComplete="email" />
        </div>
        <div>
          <input type="password" name="password" onChange={this.handleChange}  autoComplete="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
