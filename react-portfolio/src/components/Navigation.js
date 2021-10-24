import React, { useState } from 'react';

function Navigation() {

    return (
        <div>
            <nav>
                <ul class="Navigation" >
                    <li>
                        <a href="#about-me"> About Me</a>
                    </li>
                    <li>
                        <a href="#Projects"> Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Details</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;