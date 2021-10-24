import React, { useState } from "react";
import Navigation from './Navigation';
import Project from './Project';
import Footer from './Footer';
import '../Styles/Header.css';

function Header() {

    return (
        <div>
            <header class="header">
                <img id="Profile-Pic" src="../Images/Profile Pic.jpg" alt="Profile Picture"/>
                <h1 id="name">Anthony Deamer</h1>

            </header>
        </div>
    );
}

export default Header;