import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './style.css';

const NavBar = () => {
    const history = useHistory();

    return (
        <nav className="nav-body">
            <NavLink activeClassName="current" exact to="/">Home</NavLink>
            <NavLink activeClassName="current" to="/user">User</NavLink>
        </nav>
    ); 
}

export default NavBar;
