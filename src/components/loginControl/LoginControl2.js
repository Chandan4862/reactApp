import React, {useState} from "react"

function LoginControl2 (props){
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    function handleClick() {
        setIsLoggedIn((prevState)=>{
            return !prevState
        })
    }
    return (
        <div>
            {isLoggedIn ? <LoginButton onClick={handleClick}></LoginButton> : <LogoutButton onClick={handleClick}></LogoutButton>}
            <Greeting isLoggedIn = {isLoggedIn}></Greeting>
        </div> 
    )
}

function Greeting(props){
    if(props.isLoggedIn) {
        return <p>Welcome</p>
    }
    return <p>Please Login</p>
}

function LogoutButton(props){
   return <button onClick={props.onClick}>LogOut</button> 
}

function LoginButton(props){
    return <button onClick={props.onClick}>Login</button>
}

export default LoginControl2