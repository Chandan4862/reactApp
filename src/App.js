import {Route, Switch,Link, Redirect} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Data from './components/data';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      {/* <Switch> */}
        <Route path="/" exact>
            <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home/:id">
            <Data></Data>
        </Route>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Route path="/about" >
          <About></About>
        </Route>
      {/* </Switch> */}

    </div>
  );
}

export default App;
