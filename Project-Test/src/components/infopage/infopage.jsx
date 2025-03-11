import React from 'react';
import './infopage.css';

const InfoPage = ({ onClose }) => {
    return (
        <div className="info-page">
            <button className="close-btn" onClick={onClose}>Close</button>
            <h1>Information Page</h1>
            <p>This is the information page content.</p>
        </div>
    );
};

export default InfoPage;