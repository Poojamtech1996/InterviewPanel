import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from './redux/loginRedux';
function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login,setLogin] = useState(false)
  const userData = useSelector((state)=>state.userValue);
  const handleLogout= (event)=>{
    toast.success("Successfully Logged Out!")
    dispatch(userLogout())
    window.localStorage.setItem("login",false);
    setTimeout(()=>{
      navigate("/");
    },1850);
  }
  useEffect(()=>{
    const result = userData.login
    console.log("Hit",result,userData)
    setLogin(result)
  },[userData,window.localStorage.getItem("login"),login])
  return (
    <>
    <Toaster/>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          < Link className="navbar-brand" onClick={()=>navigate("/dashboard")}>INTERVIEW Q/A</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link active" onClick={()=>navigate("/dashboard/home")}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>navigate("/dashboard/about")}>About</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>navigate("/dashboard/technology")}>Technology</button>
            </li>
            {userData.role==="Super Admin" || userData.role==="Admin" ? 
            <>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>navigate("/dashboard/qa")}>Q/A</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>navigate("/dashboard/role")}>Role</button>
            </li> 
            <li className="nav-item">
              <button className="nav-link" onClick={()=>navigate("/dashboard/user")}>User</button>
            </li>
            </> : null }
            <li className="nav-item">
              <button className="nav-link" to="career">Career</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" to="contact">Contact</button>
            </li>
          </ul>
          {login===true ? <Button onClick={(event)=>handleLogout(event)} style={{fontWeight : 600}}>LogOut</Button> :<Button onClick={(event)=>navigate("/login")} style={{fontWeight : 600}}>Login</Button> }
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;