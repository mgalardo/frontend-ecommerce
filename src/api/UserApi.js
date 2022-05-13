import axios from 'axios'
export default {
  async getUser (email, password) {
    const data = await axios.get('http://localhost:8095/api/user', {
      params: {
        email, password
      }
    })
    return data.data
  }
}
