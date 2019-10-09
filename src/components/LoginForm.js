import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = (evt) => {
    this.setState({
      username: evt.target.value
    })
  }

  handlePassword = (evt) => {
    this.setState({
      password: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    if (!this.state.username || !this.state.password) {
       console.log("Try again dummy");
    }
    else
    return this.props.handleLogin(this.state)
    console.log(this.state.username);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsername} value={this.state.username} />
            <p>{this.state.username} </p>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePassword} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
