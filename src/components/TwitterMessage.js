import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }
  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //
  // }


  render() {

    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}/>
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
