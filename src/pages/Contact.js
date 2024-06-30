import React, { useRef } from "react";
import Kafice from "../coffee images/kaficeeeee.webp";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2podlvo", "template_mji7mpo", form.current, {
        publicKey: "fn1xzPIObSP9H1bT7",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Kafice})` }}
      ></div>
      <div className="rightSide">
        <h1>CONTACT US</h1>
        <form id="contact-form" method="POST" ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Full name</label>
          <input
            name="user_name"
            placeholder="Enter your name..."
            type="text"
          />
          <input
            name="user_email"
            placeholder="Enter your email..."
            type="email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
