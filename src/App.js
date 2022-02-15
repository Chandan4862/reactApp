import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './components/Main';
function App() {
  return (
    <Provider store={store}>
    <div>
      <h2>Redux State</h2>
      <Main/>
    </div>
    </Provider>
  );
}
export default App;
