import React,{ useContext } from 'react';
import AuthContext from './auth-context';

function Form(props) {
    // let scales = {c:'Celcius', f:'Farenheit'};
    function handleClick(event) {
        props.convert(event.target.value)
    }
    let ctx = useContext(AuthContext)

    return (
        <div>
            <fieldset>
                <legend>Enter temperature in {ctx[props.scale]}:</legend>
                <input value={props.temp} onChange={handleClick} />
            </fieldset>           
        </div>
    )
}

export default Form