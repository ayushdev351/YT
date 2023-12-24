import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux';

const Body = () => {

  const isMenuOpen = useSelector((store) => store.page.isMenuOpen);

  return (
    <div className='flex px-5 py-2'>
      {isMenuOpen ? <Sidebar/> : <></>}
      <MainContainer/> 
    </div>
  )
}

export default Body