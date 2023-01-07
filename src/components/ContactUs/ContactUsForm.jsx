import React from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './Contact.css'
import {
    FaMobileAlt,
    FaRegEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';

const Result = () => {
    return (
        <p>Your message has been successfully sent. I will contact you soon.</p>
    )
}

function ContactUsForm() {

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
        <div className="contactUsForm">
            <section className="contact">
                <div className="content">
                    <h2>Contact Us</h2>
                    <p>Any Question In Mind ? Just Contact Us.</p>
                </div>
                <div className="container">
                    <div className="contactInfo">
                        <div className="text-white extraInfo">
                            <h2>Contact Information</h2>
                            <h5>Fill up the information and our teem get back to you.</h5>
                        </div>
                        <div className="box">
                            <div className="icon"><FaMapMarkerAlt className='icon' /></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>501 street india</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><FaMobileAlt className='icon' /></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>+91 8521479630</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><FaRegEnvelope className='icon' /></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>tripnthrill.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form action="" onSubmit={sendEmail}>
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" name="fullName" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="phone" required="required" />
                                <span>Phone Number</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="email" required="required" />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea name="message" required="required"></textarea>
                                <span>Type your Message</span>
                            </div>
                            <div className="inputBox">
                                <input type="Submit" name="" value="Send" />
                            </div>
                            <div className="row">{result ? <Result /> : null}</div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUsForm
