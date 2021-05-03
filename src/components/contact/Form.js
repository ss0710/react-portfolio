import React from 'react';

const Form = () => {
    return (
            <div className="form-section">
                <div className="form-div">
                    <h4><span>Get In Touch</span></h4>
                    <form>      
                    <input type="text" placeholder="Name" /><br/>
                    <input type="email" placeholder="Email" /><br/>
                    <input type="text" placeholder="Subject" /><br/>
                    <textarea type="text" placeholder="Message"/>
                    </form>
                </div>
                <div className="img-div">
                    <div className="img-inner-div">
                    </div>
                </div>
            </div>
    )
}

export default Form;
