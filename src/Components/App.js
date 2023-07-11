import '../Components/App.css';
import $ from 'jquery';
import UpdateProdile from '../Components/updateProfile'
import Home from '../pages/Home/Home'
import Services from '../pages/Servicess/services'
import About from '../pages/About/about'
import Contact from '../pages/Contact/contact'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from '../pages/Login/Login'
import Register from '../pages/Rigester/Register'



function App() {
  return (
    
    <BrowserRouter> 
     
          <Routes>
            <Route path='/' element={<Homee />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/updateProfile' element={<UpdateProdile />} />
          </Routes>       

        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}



export default App;
