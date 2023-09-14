import React from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Career from './Component/Career';
import About from './Component/About';
import Technology from './Component/Technology';
import QA from './Component/QA';
import Role from './Component/Role';
import User from './Component/User';

//Test

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar />}>
      <Route path ="home" element={<Home/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="technology" element={<Technology/>} />
      <Route path="qa" element={<QA/>} />
      <Route path="role" element={<Role/>} />
      <Route path="user" element={<User/>} />
      <Route path="career" element={<Career/>} />
      <Route path="about" element={<About/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
