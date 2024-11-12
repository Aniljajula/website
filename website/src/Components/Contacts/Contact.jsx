import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
          
                <h1>Contact</h1>
                <p>We’d ❤️ to help!</p>
                <p>We love discussing ideas with new and creative people. Feel free to reach out to us anytime!</p>
            </div>

            <div className="contact-content">
                <div className="contact-form">
                    <input type="text" placeholder="Your Name" className="contact-input" />
                    <input type="email" placeholder="Email" className="contact-input" />
                    <textarea placeholder="Message" className="contact-textarea"></textarea>
                    <button type="submit" className="contact-button">Send</button>
                </div>

                <div className="contact-details">
                    <h3>Green Web Design</h3>
                    <p>Country: india</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: contact@greenwebdesign.com</p>
                    <div className="social-icons">
                        {/* Replace with actual icons or images for social media links */}
                        <span>Facebook | Twitter | LinkedIn</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
