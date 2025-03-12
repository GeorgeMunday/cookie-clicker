import React from 'react';
import '../Homepage.css';

const Navbar = ({ onInfoClick, onLegacyClick }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li className="dropdown">
                    <button className="dropbtn">Options</button>
                </li>
                <li className="dropdown">
                    <button className="dropbtn" onClick={onInfoClick}>Info</button>
                </li>
                <li className="dropdown">
                    <button className="dropbtn">Stats</button>
                </li>
                <li className="dropdown">
                    <button className="dropbtn" onClick={onLegacyClick}>Legacy</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;