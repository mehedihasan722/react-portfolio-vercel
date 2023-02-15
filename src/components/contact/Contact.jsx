import  {React, useRef } from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rb0i09e', 'template_yp385ed', form.current, '7qSCD4sXdsL8fkluD')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <MdOutlineEmail className='contact-option-icon'></MdOutlineEmail>
            <h4>Email</h4>
            <h5>mjimehedi99@gmail.com</h5>
            <a href="mailto:mjimehedi99@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact-option'>
            <RiMessengerLine className='contact-option-icon'></RiMessengerLine>
            <h4>Messenger</h4>
            <h5>Mehedi Hasan</h5>
            <a href="https://m.me/profile.php?id=100078693222809"  target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact-option'>
            <BsWhatsapp className='contact-option-icon'></BsWhatsapp>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://wa.me/+8801638124722"  target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        {/* Form option  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact