import React, { useRef,useState } from 'react';
import '../css/index.css';
import emailjs from "@emailjs/browser";


export default function ContactForm() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form not found.");
      return;
    }

    if(isSending){
      setIsSending(true); //disabled button when sending
      return;
    } 


    emailjs.sendForm('service_l1acpdh', 'template_rwofth8', formRef.current, {
      publicKey: '1LTCL_PmpQi0TJ9tj',
    }
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSending(false);
        formRef.current.reset(); // ✅ Clears form
      },
      (error) => {
        console.log('FAILED...', error);
        setIsSending(false);
        alert("error sending email");
      },
    );
  }

  return (
    <form ref={formRef} id="contact_form" onSubmit={handleSubmit} className='email-form'>
      <h1 className="contact-header">Contact Me</h1>
      <input placeholder='Name' name="email_name" id="email_name" type="text" className='input-box' required maxLength="50" pattern="^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$"></input>
      <input placeholder='Enter email' name="email_from" id="email_from" type="text" className='input-box' required maxLength="254" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"></input>
      <textarea placeholder='message...' name="message" id="message" type="text" className='input-box' required maxLength="500"></textarea>
      <button className='submit-btn' type="submit" disabled={isSending} value="Send">
    
        {isSending ? "Sending..." : "send"}
      </button>
    </form>
  );
}