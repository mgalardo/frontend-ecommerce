import axios from 'axios'
export default {
  async getProducts () {
    const data = await axios.get('http://localhost:8095/api/products')
    return data.data
  }
}
