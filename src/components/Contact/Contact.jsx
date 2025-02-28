import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/gmail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'


const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a1693254-041f-4a5e-9f40-2333c7028edf");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
        <div className="contact-col">
       <h3>Send us a message <img src={msg_icon} alt='' /> </h3>
       <p>
       "We’d love to hear from you! Whether you have questions,
        feedback, or collaboration opportunities, feel free to reach 
        out. Our team is here to assist you and ensure you have the best 
        experience. Connect with us today!"</p>
       <ul>
        <li><img src={mail_icon} alt='' />Contact@LearnVista.com</li>
        <li><img src={phone_icon} alt='' />(+91) 9449447654</li>
        <li><img src={location_icon} alt=''/>123, Knowledge Park, Sector 5,<br/>Near Innovation Hub, Bengaluru, Karnataka – 560001, India</li>
       </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your Name' required/>
                <label>phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Phone number' required/>
                <label>Write your message here</label>
                <textarea name='message' id='' cols='30' rows='6' placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>

        </div>
      
    </div>
  )
}

export default Contact
