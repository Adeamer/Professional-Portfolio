import React from "react";
import '../../Styles/Resume.css';
import Pdf from '../../Images/Anthony Deamer- Resume.pdf'

function Resume() {

    return (
        <div>
            <h2 className='resume-title'>Resume and Technologies</h2>
            <br></br>
            <h3 className='resume-link'>View my resume here:<a href={Pdf} target='_blank'> Anthony Deamer's Resume</a></h3>
            <br></br>
            <h3 className='front-end-title'>Front End Technologies:</h3>
            <p className='front-end-text'>- HTML</p>
            <p className='front-end-text'>- CSS</p>
            <p className='front-end-text'>- Javscript</p>
            <p className='front-end-text'>- React</p>
            <br></br>
            <h3 className='back-end-title'>Back End Technologies:</h3>
            <p className='back-end-text'>- NodeJS</p>
            <p className='back-end-text'>- Express</p>
            <p className='back-end-text'>- Mysql adn Nosql</p>
            <p className='back-end-text'>- GraphQL</p>
            <p className='back-end-text'>- MongoDB</p>
            <p className='back-end-text'>- Mongoose</p>
        </div>
    );
}

export default Resume;