import React from 'react'
import '../css/index.css';



export default function ContactForm() {

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("email sent");
  }

  
    return (
      
      <form onSubmit={handleSubmit} className='email-form'>
        <h1 className="contact-header">Contact Me</h1>
          <input placeholder='Name' type="text" className='input-box' required></input>
          <input placeholder='Enter email' type="text" className='input-box' required></input>
          <textarea placeholder='message...' type="text" className='input-box' required></textarea>
      <button className='submit-btn' type="submit">Send</button>


      </form>
       
       
  
  
      
    );


    }