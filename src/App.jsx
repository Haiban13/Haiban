 
 
import { Outlet } from 'react-router-dom'
import NavbarGlass from './components/NavbarGlass.jsx';


function App() {
 

  return (
    <>
      <NavbarGlass/>
     <div className='overflow-x-hidden'>
      
      <Outlet/>
     </div>
    </>
  )
}

export default App
