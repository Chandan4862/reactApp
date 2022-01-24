import React from "react";
import {useParams} from 'react-router-dom';

function NewQuote(){
    let param = useParams()
    return(
        <h1>New Quote!: {param.id}</h1>
    )
}

export default NewQuote