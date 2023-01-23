import React from 'react';
import './Modal.css';

function ContactUsModal({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <p>Your message has been successfully sent. I will contact you soon.</p>
                </div>
                <div className="footer">
                    <button onClick={() => {
                        closeModal(false);
                    }}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUsModal
