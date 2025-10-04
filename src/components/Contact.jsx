
import React from 'react';
import 'C:/Users/portfolio/my-portfolio/src/App.css';

const Contact = () => {
  return (
    <section id="contact" style={{background:'#282828', color:'white'}}>
      <h2>Let's Connect!</h2>
      <p>Feel free to reach out via social platforms or send a message</p>
      <div className="social-icons">
        <a href="#"><i className="fa fa-phone"></i></a>
        <a href="#"><i className="fa fa-envelope"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
      </div>
      <form style={{marginTop:'20px', display:'flex', flexDirection:'column', gap:'10px'}}>
        <input type="text" placeholder="Name" style={{padding:'10px', borderRadius:'8px', border:'none'}}/>
        <input type="email" placeholder="Email" style={{padding:'10px', borderRadius:'8px', border:'none'}}/>
        <textarea placeholder="Message" rows="4" style={{padding:'10px', borderRadius:'8px', border:'none'}}></textarea>
        <button className="primary">Send Message</button>
      </form>
      <p style={{marginTop:'20px', color:'#ccc'}}>© 2025 Kavinaya S</p>
    </section>
  );
};

export default Contact;
