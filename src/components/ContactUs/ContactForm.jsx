import React from 'react'
import './Contact.css'

function ContactForm() {
    return (
        <div className="w-full bg-center bg-no-repeat bg-cover contactme" id="contact">
            <div className="w-full pt-20 pb-20 contactOverlay">
                <div className="container">
                    <div className="flex w-full justify-center items-center form">
                        <form className="flex flex-col w-full md:flex-row md:w-4/5 justify-between bg-white overflow-hidden rounded-lg" action="" onSubmit="">
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

                                <div className="row">All Done</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
