

import React from 'react';
import './AppHeader.scss';
import { NavLink } from 'react-router-dom';

export default function AppHeader({ toggleMenu, onOff, icon }) {


    return (
        <div>
            <nav className="app-header">
                <h1><i className="fab fa-bitcoin"></i> Mister Bitcoin</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                <NavLink to="/personal-area">Personal Area</NavLink>
                <NavLink to="/signup">Signup</NavLink>
            </nav>


            <nav className="app-header-mobile">
                <div className="title-btn">
                    <h1><i className="fab fa-bitcoin"></i> Mister Bitcoin</h1>
                    <i className="fas fa-bars" onClick={toggleMenu}></i>
                </div>
                <div class="mobile-ul" style={{ display: onOff }}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/personal-area">Personal Area</NavLink>
                    <NavLink to="/signup">Signup</NavLink>
                </div>
            </nav>
        </div>
    )
}
