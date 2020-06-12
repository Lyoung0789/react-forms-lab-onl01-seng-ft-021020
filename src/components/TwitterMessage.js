import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: ""
    };
  }

  handleOnChange = event => {
    // debugger
    this.setState({
        message: event.target.value, 
        maxChars: this.state.maxChars - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={ event => this.handleOnChange(event)} value={this.state.message}/>
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
