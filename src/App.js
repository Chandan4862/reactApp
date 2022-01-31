import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import AllQuote from "./pages/AllQuote";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/allQuote"></Redirect>
          </Route>
          <Route path="/allQuote" exact>
            <AllQuote></AllQuote>
          </Route>
          <Route path="/newQuote">
            <NewQuote></NewQuote>
          </Route>
          <Route path="/details/:id">
            <QuoteDetails></QuoteDetails>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

