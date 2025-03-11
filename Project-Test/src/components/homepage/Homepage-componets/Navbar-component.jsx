import React from 'react';
import '../Homepage.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <ul className="navbar-links">
                <li className="dropdown">
                    <div className="dropdown-content">
                        <a href="/option1">Option 1</a>
                        <a href="/option2">Option 2</a>
                        <a href="/option3">Option 3</a>
                    </div>
                </li>
                <li className="dropdown">
                    <div className="dropdown-content">
                        <a href="/info1">Info 1</a>
                        <a href="/info2">Info 2</a>
                        <a href="/info3">Info 3</a>
                    </div>
                </li>
                <li className="dropdown">
                    <div className="dropdown-content">
                        <a href="/stats1">Stats 1</a>
                        <a href="/stats2">Stats 2</a>
                        <a href="/stats3">Stats 3</a>
                    </div>
                </li>
                <li className="dropdown">
                    <div className="dropdown-content">
                        <a href="/legacy1">Legacy 1</a>
                        <a href="/legacy2">Legacy 2</a>
                        <a href="/legacy3">Legacy 3</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;