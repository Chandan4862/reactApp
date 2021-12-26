import React, {useState, useEffect, useReducer} from "react"

function LoginControl2 (props){
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    function handleClick() {
        // setIsLoggedIn((prevState)=>{
        //     return !prevState
        // })
        loginDispatch()
    }
    /********************************************/
    /********************************************/
    /*Reducers*/
    const loginReducer = (state, action)  => { 
        return !state
    }
    const[isLoggedIn, loginDispatch] = useReducer(loginReducer,false)
    /********************************************/
    /*Use Effect*/
    useEffect(()=>{
        LoginButtonToggle()

        return ()=>{console.log('CleanUP')}
    },[isLoggedIn])
    /********************************************/

    function LoginButtonToggle(){
        if(isLoggedIn) {
            return <LoginButton onClick={handleClick}></LoginButton> 
        }
        return <LogoutButton onClick={handleClick}></LogoutButton>
    }

    return (
        <div>
            {LoginButtonToggle()}
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