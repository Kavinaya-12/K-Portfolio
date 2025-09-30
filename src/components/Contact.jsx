import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
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
        (result) => {
          setSuccess("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setSuccess("Oops! Something went wrong.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <motion.h2
          className="text-center mb-5 section-title"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get in <span className="highlight">Touch</span>
        </motion.h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="mb-3">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-custom px-4">
                  Send Message
                </button>
              </div>
              {success && <p className="text-center mt-3">{success}</p>}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
