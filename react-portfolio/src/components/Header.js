import React, { useState } from "react";
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Project from './Project';
import Footer from './Footer';
import '../Styles/Header.css';
import ProfilePic from '../Images/Profile-Pic.jpg';

function Header() {

    return (
        <div>
            <header class="header">
                <img id="Profile-Pic" src={ProfilePic} alt="Profile Picture"/>
                <h1 id="name">Anthony Deamer</h1>
                <Navigation/>
            </header>
            <AboutMe/>
        </div>
    );
}

export default Header;