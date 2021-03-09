import React from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

function ContactUs() {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_4x82k78', 'portfolio', e.target, 'user_3KvwIT7EmlNAyUdLHvwkj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    
    return (
        <div>
        <div className="contact-container">
          
            <form className="contact-form" onSubmit={sendEmail}>
            <div>
                Lets Connect!
            </div>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" id="input-area" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" id="input-area" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="form-control" cols="30" rows="8" placeholder="Your Message" id="input-area"/>
                </div>
                <div>
                    <btn className="bouncy">
                <input id="submit" type="submit" value="Send Message" />
                    </btn>
                </div>
        </form>

            </div>
        </div>
    )
}

export default ContactUs;
