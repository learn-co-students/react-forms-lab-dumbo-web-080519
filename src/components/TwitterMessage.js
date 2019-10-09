import React from "react";

class TwitterMessage extends React.Component {
  
  state = {
      message: "",
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <span>{this.props.maxChars - this.state.message.length} character Remaining</span>
      </div>
    );
  }
}

export default TwitterMessage;
