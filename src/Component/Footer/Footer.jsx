import React from 'react';
import './Footer.css';


const Footer = () =>{
    return(
        <div className="wrap-footer">
            <div className="copy-text">
                <p>&copy; 2020 DeadNaught.com</p>
            </div>
            <ul className="wrap-icons">
                <li className="bg-icons">
                    <a href="https://www.facebook.com/irvan.nugraha.311">
                        <li className="fa fa-facebook"></li>
                    </a>
                </li>
                <li className="bg-icons">
                    <a href="https://twitter.com/rivannu41377203">
                        <li className="fa fa-twitter"></li>
                    </a>
                </li>
                <li className="bg-icons">
                    <a href="https://www.instagram.com/nugrahairvan54/?hl=id">
                        <li className="fa fa-instagram"></li>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;