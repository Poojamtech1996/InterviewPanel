import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from './redux/loginRedux';
function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector((state)=>state.userValue);
  const handleLogout= (event)=>{
    toast.success("Successfully Logged Out!")
    dispatch(userLogout())
    setTimeout(()=>{
      navigate("/");
    },1850);
  }
  return (
    <>
    <Toaster/>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          < Link class="navbar-brand" to="/">INTERVIEW Q/A</Link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="home">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="technology">Technology</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="qa">Q/A</Link>
            </li>
            {userData.role==="Super Admin" || userData.role==="Admin" ? <>
            <li class="nav-item">
              <Link class="nav-link" to="role">Role</Link>
            </li> 
            <li class="nav-item">
              <Link class="nav-link" to="user">User</Link>
            </li></> : null }
            <li class="nav-item">
              <Link class="nav-link" to="career">Career</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="contact">Contact</Link>
            </li>
          </ul>
          <Button onClick={(event)=>handleLogout(event)} style={{fontWeight : 600}}>LogOut</Button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;