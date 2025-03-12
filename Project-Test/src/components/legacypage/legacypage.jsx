import React from 'react';
import './legacypage.css';

const LegacyPage = ({ onClose, cookies, setCookies, cps, setCps }) => {
    const handleReset = () => {
        if (cookies >= 10000000000000000000000000) {
            setCookies(0);
            setCps(cps * 1.3);
        }
    };

    return (
        <div className="legacy-page">
            <button className="close-btn" onClick={onClose}>Close</button>
            <h1>Legacy Page</h1>
            <p>This is the legacy page content.</p>
            <p>you need x more cookies</p>
            <button 
                className="reset-btn" 
                onClick={handleReset} 
                disabled={cookies < 10000000000000000000000000}
                style={{ opacity: cookies < 10000000000000000000000000 ? 0.5 : 1 }}
            >
                reincarnate
            </button>
        </div>
    );
};

export default LegacyPage;