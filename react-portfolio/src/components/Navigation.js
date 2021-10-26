import React, { useState } from 'react';
import '../Styles/Navigation.css';

function Navigation({ currentPage, handlePageChange }) {

    return (
        <div>
            <nav>
                <ul class="Navigation" >
                    <li>
                        <a href="#about-me"
                        onClick={() => handlePageChange('AboutMe')}
                        className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}> About Me</a>
                    </li>
                    <li>
                        <a href="#Projects"
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}> Projects</a>
                    </li>
                    <li>
                        <a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Details</a>
                    </li>
                    <li>
                        <a href="#Resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;