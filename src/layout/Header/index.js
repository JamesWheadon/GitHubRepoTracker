import React from 'react';
import NavBar from '../../components/NavBar'

import './style.css'

const Header = () => {
    return (
        <>
        <img src="https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Git-512.png" alt="Git" />
        <h1 id="gitTracker" className="header">gitTracker</h1>
        <NavBar />
        </>
    );
};

export default Header;
