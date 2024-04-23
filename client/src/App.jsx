import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';


function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<SignUp />} />
    <Route path='/login' element={<Login />} />
    <Route path='/home' element={<Home />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
