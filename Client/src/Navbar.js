import React from 'react';
import { Outlet, Link } from "react-router-dom";


function Navbar() {
  return (
    <>
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
            <li class="nav-item">
              <Link class="nav-link" to="role">Role</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="user">User</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="career">Career</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;