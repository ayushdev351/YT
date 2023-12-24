import { Provider } from 'react-redux';

import appStore from './utils/store';

import './App.css'
import Head from './components/Head';
import Body from './components/Body'


function App() {
  return (
    <Provider store = {appStore}>
        <Head/>
        <Body/>
    </Provider>
  );
}

export default App;
