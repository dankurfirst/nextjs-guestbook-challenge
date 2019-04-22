import Message from '../components/Message'
import Header from '../components/Header'
const axios = require('axios')
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Parisienne']
  }
});

const guestbookNameStyle = {
  fontSize:16,
  fontFamily: 'Parisienne',
}
const guestbookMessageStyle = {
  fontSize:18,
  fontFamily: 'Arial',

}
const messageContainerStyle = {
  listStyle: 'none',
  padding: 20,
}

const messageContainerStyleAltRow = {
  listStyle: 'none',
  padding: 20,
  backgroundColor: '#D9E3F0',
}

const guestbookContainerStyle = {
  paddingLeft:200,
  paddingRight:200,
}





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

    <h1 style={{ fontFamily:'Arial', textAlign: 'center' }}>Your Guest Book</h1>
    { posts.length > 0 ?
    <div>
    <ul style={ guestbookContainerStyle }>
      { posts.map((post, i) => (
        
        <li style={ i % 2 == 0 ? messageContainerStyleAltRow : messageContainerStyle }  key={i}>
          <p style= { guestbookMessageStyle }>{ post.message }</p>
          <h2 style= { guestbookNameStyle }>{ post.name }</h2>
        </li>
      ))}
    </ul> </div> : <p>There are no messages</p>
    
    }
    </React.Fragment>
    )
      }
    }

      export default Guestbook



