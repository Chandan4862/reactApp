import { useState } from 'react';
import Form from './Form'

function Temperature(props){
    const [celcius, setCelcius] = useState('');
    const [farenheit, setFarenheit] = useState('')

    function handleCelcius(temp) {
        let f = toFahrenheit(temp)
        setCelcius((prevState)=>{
            return temp
         })
         setFarenheit((prevState)=>{
            return f
        })
    }

    function handleFarenheit(temp) {
        let c = toCelsius(temp)
        setFarenheit((prevState)=>{
            return temp
        })
        setCelcius((prevState)=>{
            return c
         })
    }

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }
      
      function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    return(
        <div>
            <Form scale="c" temp={celcius} convert={handleCelcius} ></Form>
            <Form scale="f" temp={farenheit} convert={handleFarenheit} ></Form>
        </div>
    )
}

export default Temperature