import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import PublicIcon from '@material-ui/icons/Public';

const ContactImfo = () => {
    return (
        <div className="imfo-div">
            <div className="imfo">
                <div className="icon-div"> <PhoneIcon className="icon"/> </div>
                <p>7565905127</p>
            </div>
            <div className="imfo">
                <div className="icon-div"> <EmailIcon className="icon"/> </div>
                <p>sudheersid0710@gmail.com</p>
            </div>
            <div className="imfo">
                <div className="icon-div"> <PublicIcon className="icon"/> </div>
                <p>websiteLink</p>
            </div>
        </div>
    )
}

export default ContactImfo;
