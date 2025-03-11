import React, { useState, useEffect } from 'react';
import Navbar from './Homepage-componets/Navbar-component.jsx';
import ClickerComponent from './Homepage-componets/Clicker-component.jsx';
import BuyMenu from './Homepage-componets/Buymenu-component.jsx';
import './Homepage.css';

const Homepage = () => {
    const [cookies, setCookies] = useState(0);
    const [cps, setCps] = useState(0);

    const handleClick = () => {
        setCookies(cookies + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCookies((prevCookies) => prevCookies + cps);
        }, 1000);

        return () => clearInterval(interval);
    }, [cps]);

    return (
        <main>
            <header>
                <h1>Cookie Clicker</h1>
            </header>
            <div>
                <Navbar />
            </div>
            <section>
                <div>
                    <ClickerComponent cookies={cookies} handleClick={handleClick} cps={cps} />
                </div>
                <div>
                    <BuyMenu cookies={cookies} setCookies={setCookies} cps={cps} setCps={setCps} />
                </div>
            </section>
        </main>
    );
};

export default Homepage;