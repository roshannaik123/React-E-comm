import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import CartPage from './pages/CartPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="main-outlet">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cartPage' element={<CartPage/>}/>
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
