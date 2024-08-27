import React from 'react';
import './css/Navbar.css';
import logo from './img/Logo.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="logoName">
        <h2>
          <p className='white_logo'>Hostel<b>NET</b></p>
        </h2>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Rooms</a></li>
        <li><a href="/cart">Inventory</a></li>
        <li><a href="/login">Foods</a></li>
        <li><a href="/login">Maintain</a></li>
        <li><a href="/login">Cart</a></li>
        <li><a href="/login">Payment</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
