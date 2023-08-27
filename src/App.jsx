import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home'


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
       <Route path='/' element={<Home/>}></Route>
       </Routes>
       </BrowserRouter>
      
    </>
  )
}

export default App
