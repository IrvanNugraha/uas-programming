import React from 'react';
import Logo from '../../Image/logo.png';
import './Header.css';


const Header = () =>{
    return(
        <div className="head-wrap">
            <div className="con">
                <div className="logo">
                    <a href="/">
                        <img src={Logo} alt=""/>
                    </a>
                </div>
                <a href="/srch" className="search-Box">
                    <center><span>Search</span></center>
                </a>
                <ul className="navi-bar">
                <li className="nav">
                    <a href="/">
                        <li>Home</li>
                    </a>
                </li>
                <li className="nav">
                    <a href="./product">
                        <li>Product</li>
                    </a>
                </li>
                <li className="nav">
                    <a href="/ctg">
                        <li>Categories</li>
                    </a>
                </li>
                <li className="nav">
                    <a href="/about">
                        <li>About Us</li>
                    </a>
                </li>                           
            </ul>
            </div>
              
        </div>
    );
}

export default Header;