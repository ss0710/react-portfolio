import React from 'react';
import ContactImfo from './ContactImfo';
import Form from './Form';

const Contact = () => {
    return(
        <div data-aos="slide-right" data-aos-duration="2000">
            <Form />    
            <ContactImfo />
        </div>
    );
}

export default Contact;