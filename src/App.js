import {Route,Link} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';

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
      <Route path="/home" >
        <Home></Home>
      </Route>
      <Route path="/about" >
        <About></About>
      </Route>
    </div>
  );
}

export default App;
