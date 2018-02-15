import Axios from 'axios'

Axios.interceptors.response.use(
  resp => resp,
  err => Promise.reject(err)
)
window.axios = Axios

export default Axios
