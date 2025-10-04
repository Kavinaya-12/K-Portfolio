import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import "../styles/Contact.css"; 
import "C:/Users/portfolio/my-portfolio/src/App.css"

const EmailPopup = ({ isOpen, onClose }) => {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pwuptgt",
        "template_piqp3ww",
        form.current,
        "3PXkkXrPeIWptXxcZ"
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          e.target.reset();
          setTimeout(() => {
            setSuccess("");
            onClose();
          }, 2000);
        },
        () => {
          setSuccess("Oops! Something went wrong.");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <motion.div
        className="modal-content"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h3>Send Me a Message</h3>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-custom">Send</button>
        </form>
        {success && <p className="success-msg">{success}</p>}
      </motion.div>
    </div>
  );
};

export default EmailPopup;
