import React, { useContext } from 'react'

import pageContext from '../context/pageContext'

import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {

  const pageData = useContext(pageContext);

  return (
    <div className='flex px-5 py-2'>
      {pageData.isOpen ? <Sidebar/> : <></>}
      <MainContainer/>
    </div>
  )
}

export default Body