import React from 'react';
import '../Homepage.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li className="dropdown">
                    <button className="dropbtn">Options</button>
                    <div className="dropdown-content">
                        <a href="/option1">Option 1</a>
                    </div>
                </li>
                <li className="dropdown">
                    <button className="dropbtn">Info</button>
                    <div className="dropdown-content">
                        <a href="/info1">Info 1</a>
                    </div>
                </li>
                <li className="dropdown">
                    <button className="dropbtn">Stats</button>
                    <div className="dropdown-content">
                        <a href="/stats1">Stats 1</a>
                    </div>
                </li>
                <li className="dropdown">
                    <button className="dropbtn">Legacy</button>
                    <div className="dropdown-content">
                        <a href="/legacy1">Legacy 1</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;