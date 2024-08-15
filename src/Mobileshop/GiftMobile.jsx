import React from "react";
import './GiftMobile.css'
import { useState } from "react";
import Gift1 from './assets/gift1.webp'
import Gift3 from './assets/gift3.jpeg'
import Gift4 from './assets/gift4.jpeg'
import GiftBack1 from './assets/giftback1.webp'
import GiftBack3 from './assets/giftback3.jpeg'
import GiftBack4 from './assets/giftback4.jpeg'

export function GiftMobile(){

    const [msg, setMsg] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      setMsg("Your Response Has Been Submitted Successfully");
      setTimeout(() => {
        setMsg("");
      }, 3000);
    };
  

    return (
        <>


                
<div id="contact" className="Slogan-Contact-Main">
                <div className="Slogan-container1">
                    <div className="row">
                    <h1 className="Slogan-sub-title">Join us for our company's slogan contest</h1>
                        <div className="Slogan-contact-left" >
                            <h1> Your participation is welcome!</h1>
                            <h2>Top 3 slogans will win exciting prizes such as a watch, headphones, true Wireless earbuds, and more</h2>
                            <h3>Don't miss this opportunity to shine and be rewarded!</h3>
                        </div>
                        <div className="Slogan-contact-right">
                            <form className="Slogan-form" name="Slogan-submit-to-google-sheet" onSubmit={handleSubmit}>
                                <input type="text" name="Name" placeholder="Your Name" require />
                                <input type="email" name="Email" placeholder="Your Email" required />
                                <textarea name="Message" rows="6" placeholder="Your Slogan" ></textarea>
                                <span id="msg">{msg}</span>
                                <button type="submit" className="Slogan-btn Slogan-btn2"> Submit </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="Gift-main-img">
                    <img className="Gift-img" src={Gift3} alt="" />
                    <img className="Gift-Back-img" src={GiftBack3} alt="" />
                </div>

            <div className="Gift-LR-main">
            <div className="Gift-main-img">
                    <img className="Gift-img" src={Gift4} alt="" />
                    <img className="Gift-Back-img" src={GiftBack4} alt="" />
                </div>

            </div>
            </div>


        </>
    )
}