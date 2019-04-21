

class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        name: '',
        message: ''
      };  
      
    }
      
    render() {
      return (
        <React.Fragment>
        <h1>Name: { this.state.name } </h1>
        <p>Message: { this.state.message } </p>
        </React.Fragment>

      )
    }
  }

  export default Message