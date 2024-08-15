import React, { useState } from "react";
import './ContactUs.css';

export function ContactUs1() {
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("Message sent successfully");
    setTimeout(() => {
      setMsg("");
    }, 3000);
  };

    return (
        <>
            <div id="contact" className="Contact-Main">
                <div className="container">
                    <div className="row">
                        <div className="contact-left" >
                            <h1 className="sub-title">Contact Us</h1>
                            <p> <i className="fa-solid fa-paper-plane"></i>mobilestore@gmail.com</p>
                            <p> <i className="fa-solid fa-square-phone"></i>987654329</p>
                            <div className="social-icon">
                                <a href="#"><i className="fa-brands fa-linkedin"></i> </a>
                                <a href="#"><i className="fa-brands fa-github"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            </div>
                        </div>
                        <div className="contact-right">
                            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                                <input type="text" name="Name" placeholder="Your Name" require />
                                <input type="email" name="Email" placeholder="Your Email" required />
                                <textarea name="Message" rows="6" placeholder="Your Message" ></textarea>
                                <span id="msg">{msg}</span>
                                <button type="submit" className="btn btn2"> Submit </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
