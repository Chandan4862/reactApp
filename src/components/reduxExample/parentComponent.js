import React, {useState, useEffect} from "react"
import redux from "redux"
import ChildFunc from './childComponent'

let ParentFunc = ()=>{
    const [test, settest] = useState('initialValue');
    const [count, setcount] = useState(0)
    function handleClick() {
            settest(()=>{
                return test == 'initialValue' ? 'newValue' : 'initialValue' 
            })
    }
    useEffect(()=>{
        setcount((prevState,count)=>{
            return count = prevState + 1
        })
    },[test])

    return (
        <>
        Hi there from Parent - {test}
        <br></br>
        <button onClick={handleClick}>CLICK ME</button>
        <br></br>
        UseEffect Called: {count}
        <br></br>
        <ChildFunc></ChildFunc>
        </>
    )

}

export default ParentFunc