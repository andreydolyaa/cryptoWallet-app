

import React from 'react';
import './AppHeader.scss';
import { NavLink } from 'react-router-dom';

export default function AppHeader() {
    return (
        <nav className="app-header">
            <h1><i className="fab fa-bitcoin"></i> Mister Bitcoin</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/personal-area">Personal Area</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </nav>
    )
}
