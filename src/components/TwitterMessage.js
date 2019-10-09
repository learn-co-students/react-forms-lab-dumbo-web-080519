import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageForm = (event) => {
    this.setState({
      message: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMessageForm} value={this.state.message}/>
        <p>Remaining Chars: {this.props.maxChars - this.state.message.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;
