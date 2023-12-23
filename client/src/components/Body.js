import React from 'react'

import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = ({isOpen}) => {
  return (
    <div className='flex px-5 py-2'>
      {isOpen ? <Sidebar/> : <></>}
      <MainContainer/>
    </div>
  )
}

export default Body