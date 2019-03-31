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
    event.preventDefault()
    window.alert(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="email" name="email" onChange={this.handleChange} />
        </div>
        <div>
          <input type="password" name="password" onChange={this.handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
