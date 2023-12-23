import {useState} from 'react'

import './App.css'
import Head from './components/Head';
import Body from './components/Body'

function App() {

  const [isOpen, setIsOpen] = useState(1);

  return (
    <div className="">
      <Head isOpen = {isOpen} setIsOpen = {setIsOpen}/>
      <Body isOpen = {isOpen}/>
    </div>
  );
}

export default App;
