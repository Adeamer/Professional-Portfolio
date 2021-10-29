import React, { useState } from "react";
// import '../../Styles/Contact.css';


function Contact() {
    constructor(props){
        super(props);
        this.state = {
            value: 'Enter email address'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ calue: event.target.value });
    }

    handleSubmit(event) {
        alert('Your message has been submitted and will be responded to shortly.');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-floating mb-3">
                        <textarea value={this.state.value} onChange={this.handleChange} className="form-control" id="floatingInput" placeholder="name@example.com"></textarea>
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
}

export default Contact;