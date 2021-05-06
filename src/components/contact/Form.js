import React from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            message : "",
            res:false
        }
        this.sendEmail = this.sendEmail.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.onChangeInput1 = this.onChangeInput1.bind(this);
        this.onChangeInput2 = this.onChangeInput2.bind(this);
        this.onChangeInput3 = this.onChangeInput3.bind(this);
    }

    onChangeInput1(event){
        const value = event.target.value;
        this.setState({
          name: value
        });
        console.log(this.state.name);
    };
    onChangeInput2(event){
        const value = event.target.value;
        this.setState({
          email: value
        });
        console.log(this.state.email);
    };
    onChangeInput3(event){
        const value = event.target.value;
        this.setState({
          message: value
        });
        console.log(this.state.message);
    };

     validateForm(){
                if(this.state.name)
                {
                    if(this.state.message)
                    {
                        if(this.state.message)
                        {
                            this.setState({
                                res: true
                              });
                        }else{
                            this.setState({
                                res: false
                              });
                        }
                    }else{
                        this.setState({
                            res: false
                          });
                    }
                }
                else{
                    this.setState({
                        res: false
                      });
                }
            }
            sendEmail(e){
                e.preventDefault();
                if(this.state.res===true)
                {
                emailjs.sendForm('sid07', 'template_1f5mamg', e.target, 'user_4nIApTXdw8ky6u9QqYlBs')
                  .then((result) => {
                    swal("Done", "email has been sent successfuly", "success");
                    this.setState({
                        name : "",
                        email : "",
                        message : "",
                        res:false
                      });
                  }, (error) => {
                    swal("Oops!", "Something went wrong!", "error");;
                  });
                }
                else{
                    swal("fill all details", "", "error");
                }
            }

    render(){
    return (
            <div className="form-section">
                <div className="form-div">
                    <h3><span>Get In Touch</span></h3>
                    <form onSubmit={this.sendEmail}>      
                    <input type="text" name="name" value={this.state.name} placeholder="Name*" onChange={(e) => this.onChangeInput1(e)}/><br/>
                    <input type="email" name="email" value={this.state.email} placeholder="email*" onChange={(e) => this.onChangeInput2(e)} /><br/>
                    <input type="text" placeholder="subject"/>
                    <textarea name="message" value={this.state.message} placeholder="message*" onChange={(e) => this.onChangeInput3(e)}/><br/>
                    <button type="submit" value="Send" onClick={this.validateForm}>Send</button>
                    </form>
                </div>
                <div className="img-div">
                    <div className="img-inner-div">
                    <section>
     	                <div className="container">
                    <div className="loadingspinner">
                    <div id="square1"></div>
                    <div id="square2"></div>
                    <div id="square3"></div>
                    <div id="square4"></div>
                    <div id="square5"></div>
                    </div>
                    </div>
                    </section>
                    </div>
                </div>
            </div>
    )
    }
}

export default Form;
