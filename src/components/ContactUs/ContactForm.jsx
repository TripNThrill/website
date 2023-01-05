import React from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useState } from 'react';

const Result = () => {
    return (
        <p>Your message has been successfully sent. I will contact you soon.</p>
    )
}

function ContactForm() {

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oocyjre', 'template_96ug4no', e.target, 'XsP8X-6jPep3jAh1G')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        showResult(true);
    };

    return (
        <div className="w-full bg-center bg-no-repeat bg-cover contactme" id="contact">
            <div className="w-full pt-20 pb-20 contactOverlay">
                <div className="container">
                    <div className="flex w-full justify-center items-center form">
                        <form className="flex flex-col w-full md:flex-row md:w-4/5 justify-between bg-white overflow-hidden rounded-lg" action="" onSubmit={sendEmail}>
                            <div className="w-full md:w-2/5 p-8 formWord">
                                <h2 className="text-4xl font-bold mb-5">Say Hello!</h2>
                                <span>Full Name</span>
                                <br />
                                <input className="input100" type="text" name="fullName" required />
                                <br />
                                <span>Phone Number</span>
                                <br />
                                <input className="input100" type="text" name="phone" required />
                                <br />
                                <span>Enter Email</span>
                                <br />
                                <input className="input100" type="text" name="email" required />
                                <br />
                            </div>
                            <div className="w-full md:w-2/5 p-8 formWord">
                                <span>Message</span>
                                <br />
                                <textarea name="message" required></textarea>
                                <br />
                                <button>SUBMIT</button>

                                <div className="row">{result ? <Result /> : null}</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
