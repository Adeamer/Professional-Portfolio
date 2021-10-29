import React, { useState } from "react";
import '../../Styles/Contact.css';


function Contact() {

    return (
        <div>
            <form>
                <div class="form-floating mb-3">
                    <textarea class="form-control" id="floatingInput" placeholder="name@example.com"></textarea>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Name</label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                    <label for="floatingTextarea2">Comments</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;