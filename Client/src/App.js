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
import Login from './login';
import { PrivateRoute } from './common/privateRoute';


function App() {

  const isAuthenticated = true;

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path="/" element = {<PrivateRoute><Navbar/></PrivateRoute>}></Route>
      <Route path="/dashboard/home" element = {<PrivateRoute><Navbar/><Home/></PrivateRoute>}></Route>
      <Route path="/dashboard/contact" element = {<PrivateRoute><Navbar/><Contact/></PrivateRoute>}></Route>
      <Route path="/dashboard/technology" element = {<PrivateRoute><Navbar/><Technology/></PrivateRoute>}></Route>
      <Route path="/dashboard/qa" element = {<PrivateRoute><Navbar/><QA/></PrivateRoute>}></Route>
      <Route path="/dashboard/role" element = {<PrivateRoute><Navbar/><Role/></PrivateRoute>}></Route>
      <Route path="/dashboard/user" element = {<PrivateRoute><Navbar/><User/></PrivateRoute>}></Route>
      <Route path="/dashboard/career" element = {<PrivateRoute><Navbar/><Career/></PrivateRoute>}></Route>
      <Route path="/dashboard/about" element = {<PrivateRoute><Navbar/><About/></PrivateRoute>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
