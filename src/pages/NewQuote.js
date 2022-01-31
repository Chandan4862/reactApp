import React from "react";
import QuoteForm from "../components/quotes/QuoteForm"

function NewQuote(){
    let addQuote = (quote) =>{
        console.log('author',quote.author)
    }
    return(
       <>
        <QuoteForm onAddQuote = {addQuote}></QuoteForm>
       </>
    )
}

export default NewQuote