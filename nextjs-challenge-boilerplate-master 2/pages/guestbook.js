import Message from '../components/Message'
import Header from '../components/Header'
const axios = require('axios')



class Guestbook extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
    const res = await axios.get('/api/guestbook')

    this.setState({
      posts: res.data
    })
  }

 

  render () {
    const { posts } = this.state
    return(
    <React.Fragment>
    <Header/>

    <h1>Messages</h1>
    { posts.length > 0 ?
    <ul>
      { posts.map(post => (
        <li>
          <h1>{ post.name }</h1>
          <p>{ post.message }</p>
        </li>
      ))}
    </ul> : <p>There are no messages</p>
    }
    </React.Fragment>
    )
      }
    }
    /*this.getInitialProps = async function() {
      const res = await fetch('http://localhost:3000/api/guestbook')
      const data = await res.json()
    
      console.log(`Show data fetched. Count: ${data.length}`)
    
      return {
        guestbook: data
      }
    }*/

      export default Guestbook



