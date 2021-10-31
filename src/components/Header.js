import React, { useState } from "react";
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import '../Styles/Header.css';
import ProfilePic from '../Images/Profile-Pic.jpg';

function Header() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

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
        if (currentPage === 'Contact') {
            return <Contact/>;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header className="header">
                <img id="Profile-Pic" src={ProfilePic} alt="Profile Picture"/>
                <h1 id="name">Anthony Deamer</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </header>
            {renderPage()}
            <div>
            <Footer/>
            </div>
        </div>
    );
}

export default Header;