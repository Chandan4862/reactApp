import React from 'react';

function Form(props) {
    let scales = {c:'Celcius', f:'Farenheit'};
    function handleClick(event) {
        props.convert(event.target.value)
    }
    return (
        <div>
            <fieldset>
                <legend>Enter temperature in {scales[props.scale]}:</legend>
                <input value={props.temp} onChange={handleClick} />
            </fieldset>           
        </div>
    )
}

export default Form