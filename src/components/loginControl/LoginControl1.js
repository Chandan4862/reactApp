
import React from "react";

class LoginControl extends React.Component{
  constructor(props){
    super(props)
    this.state = {isloggedIn: true};
    this.handleClick = this.handleClick.bind(this)
    this.buttonText = 'Login'
  }
  handleClick(){
    this.setState(state => ({
      isloggedIn: !state.isloggedIn
    }));
  }

  render(){
    let button;
    if(this.state.isloggedIn) {
      button = <LogoutButton onClick={this.handleClick}></LogoutButton>
    } else {
      button = <LoginButton
       onClick={this.handleClick}></LoginButton>
    }
    return  (
      <div>
      {button}
      <Greetings isloggedIn = {this.state.isloggedIn}></Greetings>
      </div>
    )
  }
}

function Greetings(props) {
  if(props.isloggedIn) {
    return (
      <p>Welcome</p>
    )
  }
  return (
    <p>Please Login</p>
  )
}

function LoginButton(props){
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props){
  return <button onClick={props.onClick}>Logout</button>
}

export default LoginControl