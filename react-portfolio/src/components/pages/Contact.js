import React, { useState } from "react";
import '../../Styles/Contact.css';


function Contact() {

// Set inital state
    return (
        <div>
            <h2 className='contact-title'>Contact Me</h2>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="floatingInput" placeholder="name@example.com"></textarea>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Name</label>
                </div>
                <br></br>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                    <label htmlFor="floatingTextarea2">Message</label>
                </div>
                <br></br>
                <button type="submit" value='Submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}

export default Contact;