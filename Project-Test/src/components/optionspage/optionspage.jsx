import React from 'react';
import './optionspage.css';

const OptionPage = ({ onClose }) => {
    return (
        <div className="info-page">
            <button className="close-btn" onClick={onClose}>Close</button>
            <h1>option Page</h1>
            <p>This is the option page content.</p>
        </div>
    );
};

export default OptionPage;