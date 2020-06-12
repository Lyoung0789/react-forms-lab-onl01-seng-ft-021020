import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }


  // handleUsername = event => {
  //   // debugger
  //   this.setState({

  //     username: event.target.value
  //   })
  // }

  // handlePassword = event => {
  //   this.setState({
  //     password : event.target.value
  //   })
  // }

  //Done in one method
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    // debugger 
    event.preventDefault()
    if(this.state.username.length !== 0 && this.state.password.length !==0){
      this.props.handleLogin(this.state)
    }
    
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleChange(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleChange(event)} />
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
