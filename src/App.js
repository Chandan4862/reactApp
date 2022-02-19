import store from './store';
import { Provider } from 'react-redux';
import Display from "./components/contacts/Display";
import Add from './components/contacts/Add';

function App() {
  return (
    <Provider store={store}>
      <div className='center'>
       <Add/>
       <Display></Display>
      </div>
    </Provider>
  );
}
export default App;
