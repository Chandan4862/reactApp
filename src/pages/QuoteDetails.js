import React, { useEffect } from "react";
import {Route,useParams,Link} from 'react-router-dom';
import { useState } from "react/cjs/react.development";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

function QuoteDetails(){
    let param = useParams();
    let DUMMY_DATA = [
        { id:4, author:"Author4", text:"Quote4"},
        { id:1, author:"Author1", text:"Quote1"},
        { id:2, author:"Author2", text:"Quote2"},
        { id:3, author:"Author3", text:"Quote3"}];
    const [quote, setQuote] = useState({})
    useEffect(() => {
      console.log("Here", param.id);
      if (param.id) {
        setQuote(() => {
          return DUMMY_DATA.filter((d) => d.id == param.id)[0] ? DUMMY_DATA.filter((d) => d.id == param.id)[0] : {};
        });
      }
    }, []);
    return(
        <>    
            {Object.keys(quote).length !== 0 ? <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote> : <NoQuotesFound/>}
        </>

    )
}

export default QuoteDetails