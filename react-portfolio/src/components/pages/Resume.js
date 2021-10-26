import React from "react";
import '../../Styles/Resume.css';

function Resume() {

    return (
        <div>
            <h2 className='resume-title'>Preview My Resume Here:</h2>
            <a className="list-inline-item" href="./Assets/Images/Anthony Deamer- Resume.pdf">Resume</a>
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
    )
}