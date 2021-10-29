import React, { useState } from "react";
// import '../../Styles/Contact.css';


function Contact() {


    return (
        <div>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="floatingInput" placeholder="name@example.com"></textarea>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Name</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                    <label for="floatingTextarea2">Comments</label>
                </div>
                <button type="submit" value='Submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}

export default Contact;