import React, { useState } from "react";
import '../../Styles/Contact.css';
import { validateEmail } from '../../utils/helpers';


function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    // const { email, name, message } = formState;
    
    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const messageChangeHandler = (e) => {
        setMessage(e.target.value)
    }

    // function handleChange(e) {
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;

    //     if (inputType === 'email') {
    //         setFormState(inputValue);
    //     } else if (inputType === "name") {
    //         setFormState(inputValue);
    //     } else if (inputType === "message") {
    //         setFormState(inputValue);
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();
        const isValid = validateEmail(email);

        if (!isValid) {
            setErrorMessage('Please enter valid email');
            return;
        }

        if (!email || !name || !message) {
            setErrorMessage("Please fill in all the fields.")   
            return;
        }

        setEmail('');
        setName('');
        setMessage('');
        // setFormState('');
        setErrorMessage(`Thank you ${name}, I will be in touch shortly.`)
    }

    return (
        <div>
            <h2 className='contact-title'>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <textarea className="form-control" id="floatingInput" defaultValue={email} onChange={emailChangeHandler} ></textarea>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingTextarea" defaultValue={name} onChange={nameChangeHandler} ></textarea>
                    <label htmlFor="floatingTextarea">Name</label>
                </div>
                <br></br>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingTextarea2" style={{ height: "100px" }} defaultValue={message} onChange={messageChangeHandler} ></textarea>
                    <label htmlFor="floatingTextarea2">Message</label>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <br></br>
                <button type="submit" value='Submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}

export default Contact;