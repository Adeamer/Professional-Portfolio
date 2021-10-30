import React, { useState } from "react";
import '../../Styles/Contact.css';
import { validateEmail } from '../../utils/helpers';


function Contact() {

    const [formState, setFormState] = useState({ email: '', name: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { email, name, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Please enter valid email');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <h2 className='contact-title'>Contact Me</h2>
            <form>
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="floatingInput" defaultValue={email} onChange={handleChange} ></textarea>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <textarea className="form-control" id="floatingTextarea" defaultValue={name} onChange={handleChange} ></textarea>
                    <label htmlFor="floatingTextarea">Name</label>
                </div>
                <br></br>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingTextarea2" style={{ height: "100px" }} defaultValue={message} onChange={handleChange} ></textarea>
                    <label htmlFor="floatingTextarea2">Message</label>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <br></br>
                <button type="submit" value='Submit' className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    );

}

export default Contact;