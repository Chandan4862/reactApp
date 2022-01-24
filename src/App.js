import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import AllQuote from "./pages/AllQuote";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/allQuote">All Quote</Link>
          </li>
          <li>
            <Link to="/newQuote/1">New Quote</Link>
          </li>
          <li>
            <Link to="/quoteDetail">Quote Detail</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/allQuote" exact>
            <AllQuote></AllQuote>
          </Route>
          <Route path="/newQuote/:id">
            <NewQuote></NewQuote>
          </Route>
          <Route path="/quoteDetail">
            <QuoteDetails></QuoteDetails>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

