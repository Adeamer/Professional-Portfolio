import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import '../Styles/Footer.css';

function Footer() {

    return (
        <div className="icons">
          <a href="https://github.com/Adeamer" className='anchor'>
            <FaGithub size= '42'/>
         </a>
         <a href="https://www.linkedin.com/in/anthony-deamer-13b3b3175/" className='anchor'>
            <FaLinkedin size= '42'/>
         </a>
         <a href="https://twitter.com/AnthonyDeamer" className='anchor'>
            <FaTwitter size= '42'/>
         </a>
        </div>
    )
}

export default Footer;