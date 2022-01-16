import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

 let ChildFunc = (props) => {
    const dispatch = useDispatch();
    const changeName = useSelector(state=> state.changeName)
    const handleName = ()=>{
        changeName({type:'childName'},dispatch)
    }
    const inc = ()=>{
        dispatch({type:'decrement'})
    }
    return <>
        Hi there from child!
        <button onClick={inc}>Decrement from child</button>
        <br></br>
        <button onClick={handleName}>Change Child</button>
    </>
}

export default  ChildFunc