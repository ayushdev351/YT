import { useState } from 'react';

import './App.css'
import Head from './components/Head';
import Body from './components/Body'

import pageContext from './context/pageContext';

function App() {

  const [isOpen, setIsOpen] = useState(1);
  
  return (
    <pageContext.Provider value={{isOpen : isOpen, setIsOpen : setIsOpen}}>
        <Head/>
        <Body/>
    </pageContext.Provider>
  );
}

export default App;
