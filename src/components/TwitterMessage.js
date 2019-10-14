import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }


  handleInputChange = event => {
    this.setState({
      input: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  componentDidMount(){
    this.setState({
      remainingChars: this.props.maxChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleInputChange} value={this.state.input}/>
        <p>Characters Remaining: {this.state.remainingChars}</p>
        {/* {console.log(this.state)} */}
      </div>
    );
  }
}

export default TwitterMessage;
