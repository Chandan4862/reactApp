import React from "react";
import QuoteList from "../components/quotes/QuoteList";

function AllQuote(){
    let DUMMY_DATA = [
        { id:4, author:"Author4", text:"Quote4"},
        { id:1, author:"Author1", text:"Quote1"},
        { id:2, author:"Author2", text:"Quote2"},
        { id:3, author:"Author3", text:"Quote3"}];
    return (
        <>
            <QuoteList quotes={DUMMY_DATA}></QuoteList>
        </>
    )

}

export default AllQuote