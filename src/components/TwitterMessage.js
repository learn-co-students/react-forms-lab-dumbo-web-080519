import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = evt => {
    this.setState({
      message: evt.target.value
    })
  }

  charsRemaining = evt => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
               name="message"
               id="message"
               value={this.state.message}
               onChange={this.handleChange}
        />
        <span>{this.charsRemaining()} chars left</span>
      </div>
    );
  }
}

export default TwitterMessage;
