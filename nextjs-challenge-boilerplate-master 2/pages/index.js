import Basic from '../components/GuestForm'
import Header from '../components/Header'
const axios = require('axios')

async function handleSubmit (values) {
  let data = values

  const response = axios.post('/api/guestbook', data)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    })

  return response
}


export default () => (
  <div>
    <Header/>
    <Basic handleSubmit={handleSubmit}/>
  </div>
)
