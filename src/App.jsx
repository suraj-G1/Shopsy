import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return(
    <div className='flex flex-col'>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
};

export default App;
