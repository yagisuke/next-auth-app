import axios from 'axios'

const loginUser = async (email, password) => {
  const { data } = await axios.post('/api/login', { email, password })
  console.log(data)
}

export default loginUser
