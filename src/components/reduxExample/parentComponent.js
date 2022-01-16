import React, {useState, useEffect} from "react"
import ChildFunc from './childComponent'
import { useSelector, useDispatch} from 'react-redux'

let ParentFunc = ()=>{
    const [test, settest] = useState('initialValue');
    const [count, setcount] = useState(0)
    function handleClick() {
            settest(()=>{
                return test === 'initialValue' ? 'newValue' : 'initialValue' 
            })
    }
    let counter = useSelector(state => state.counter);
    let name = useSelector(state => state.name)
    useEffect(()=>{
        setcount((prevState,count)=>{
            return count = prevState + 1
        })
    },[test]);

    const changeName = useSelector(state=> state.changeName)
    const handleName = ()=>{
        changeName({type:'parentName'},dispatch)
    }
    const dispatch = useDispatch();
    const inc = ()=>{
        dispatch({type:'increment'})
    }

    return (
        <>
        Hi there from Parent - {test}
        <br></br>
        <h1>MAIN COUNTER: {counter}</h1>
        <br></br>
        Name: {name}
        <br></br>
        <button onClick={handleName}>Change Parent</button>
        <br></br>
        <button onClick={inc}>Increment from parent</button>
        <br></br>
        <button onClick={handleClick}>UseEffect</button>
        <br></br>
        UseEffect Called X {count}
        <br></br>
        <ChildFunc></ChildFunc>
        </>
    )

}

export default ParentFunc