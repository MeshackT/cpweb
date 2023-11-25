import './App.css';
// add these as well
import { Routes, Route } from 'react-router-dom';
import Service from './containers/service';
import About from './containers/about';
import Home from './containers/home';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      {/* particles js */}

      {/* navbar */}
      <Navbar />
      <Footer />
      
      {/* 3rd implement the routes */}
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route  path='/service' element={<Service/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/contact' element={<Contact/>} />
      </Routes>

      {/* <Footer /> */}


    </div>
  );
}

export default App;
