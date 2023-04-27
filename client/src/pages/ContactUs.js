import React, { useState,useRef } from 'react';
import Topbar from '../components/Topbar';
import Mainbar from '../components/Mainbar';
import Footer from '../components/Footer';
import "./style.css"
import emailjs from "@emailjs/browser";


const ContactForm = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    subject: ''
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jopquri",
        "template_n47cohu",
        form.current,
        "RZnUJ5Le3Xk7WAGk4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

 
  

  return (
  <div>
<Topbar/>
<Mainbar/>
<div style={{width:'100%',height:'15%',backgroundColor:'whitesmoke'}} className='text-center'><h3 className='h3' style={{color:'brown',fontSize:'bold',fontFamily:'sans-serif'}}>CONTACT US</h3></div>
<section className='container my-4'>

<div>
<iframe src="https://maps.google.com/maps?q=cephas%20Granites%20industrial%20estate&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowFullScreen  className='map col-md-12' style={{height:'300px'}}></iframe>
</div>
<div  className='row my-5'>

<div className="company-box col-md-6">
      <h2 className="company-name">CEPHAS GRANITES</h2>
      <p className="company-details">
      #R34 Industrial Estate, Kadalakere Marpady Village Alangar Moodabidre - 574227 Karnataka INDIA
      </p>
      <div className="contact-info">
        <p className="phone-number">Phone:+91 9480696046</p>
        <p className="email-address">Email: cephasgranites@gmail.com</p>
      </div>
    </div>
  <div className='col-md-6'>
  <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="form-group">
      <label>Full Name</label>
        <input type="text" name="user_name"  id="fullName" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} required/>       
      </div>
      <div className="form-group">
      <label>Email</label>
        <input type="email" name="user_email"  id="emailAddress" value={formData.emailAddress} onChange={(e) => setFormData({...formData, emailAddress: e.target.value})} required/>
      </div>
     
      <div className="form-group">
      <label>Message</label>
        <textarea name="message" id="subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required/>
      </div>

      <div className="form-group mt-3">
              <div className="g-recaptcha" data-sitekey="6LeS4FYjAAAAANvInJjD3XyMaKqAk8KrvbnefigW" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
              <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha"/>
            </div>
            <input type="submit" value="Send" className="submit-button"/>
    </form>

    </div>
    </div>
    </section>
    <Footer/>
  </div>
  );
};
export default ContactForm