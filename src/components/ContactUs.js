import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import Modal from 'react-modal';





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

      const[modalIsOpen, setModalIsOpen] = useState(false)
      

   
    
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
                    <button className="bouncy" onClick={()=> setModalIsOpen(true)}>
                            Send message
                    </button>
                    <Modal 
                    className="modal"
                    isOpen={modalIsOpen} 
                    onRequestClose={()=> setModalIsOpen(false)}
                   >
                        <div className='modal-box'>
                        <h2 className="modal-text-title">
                            Message Sent!
                        </h2>
                        <h2 className="modal-text">I will get back to you shortly!</h2>
                        <h2 className="modal-text">Thank you for stopping by!</h2>
                        <button onClick={()=> setModalIsOpen(false)}>Close</button>

                        </div>
                    </Modal>
                
                </div>
        </form>

            </div>
        </div>
    )
}

export default ContactUs;
