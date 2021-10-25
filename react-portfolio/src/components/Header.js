import React, { useState } from "react";
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Project from './Project';
import Footer from './Footer';
import '../Styles/Header.css';
import ProfilePic from '../Images/Profile-Pic.jpg';

function Header() {
    const [currentPage, setCurrentPage] = useState('About-me');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe/>;
        }
        if (currentPage === 'Project') {
            return <Project/>;
        }
        if (currentPage === 'Resume') {
            return <Resume/>;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header class="header">
                <img id="Profile-Pic" src={ProfilePic} alt="Profile Picture"/>
                <h1 id="name">Anthony Deamer</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </header>
            {renderPage()}
        </div>
    );
}

export default Header;