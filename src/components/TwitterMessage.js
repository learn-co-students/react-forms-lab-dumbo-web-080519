import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: ""

  }

  handleonChange = (event)=> {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.value);
    console.log(this.state.message);
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleonChange}/>
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
