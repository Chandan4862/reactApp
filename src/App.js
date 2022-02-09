import { Provider } from 'react-redux';
import HelloWorld from './components/HelloWorld';
import store from './redux/store';
import Increment from './components/Increment';
import Decrement from './components/Decrement';

function App() {
  return (
    <Provider store={store}>
    <div>
      <h2>Let's get started!</h2>
      <HelloWorld></HelloWorld>
      <Increment></Increment>
      <Decrement></Decrement>
    </div>
    </Provider>
  );
}
export default App;
