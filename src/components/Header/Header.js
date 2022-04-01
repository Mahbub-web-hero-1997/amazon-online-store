import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header_Navigation'>
            <img src={logo} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/Orders">Orders</a>
                <a href="/Shop">Shop</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default Header;