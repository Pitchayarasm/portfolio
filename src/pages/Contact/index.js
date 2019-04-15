import React from "react";
import "./style.css"

function Contact() {
  return (
    <>
        <div className="container">
          <h1 style={{textAlign:"center", marginTop:"40px"}}>CONTACT ME</h1>
          <hr/>
          <div className="contact">
            <div className="row">
              <div className="col-lg-6">
                <div className="middle" style={{fontSize:"30px"}}>
                  <i class="fas fa-envelope"></i> 
                  &nbsp;&nbsp; <a href="mailto:pitchayarasm@gmail.com" rel="noopener noreferrer" target="_blank" style={{color:"rgb(49,49,49)"}}>pitchayarasm@gmail.com</a> 
                </div>
                <br/>
                <div className="middle" style={{fontSize:"30px"}}>
                  <i class="fas fa-file"></i>
                  &nbsp;&nbsp; <a href="./file/PitchayarasmK_Resume.pdf" rel="noopener noreferrer" target="_blank" style={{color:"rgb(49,49,49)"}} >My Resume</a> 
                </div>
              </div>
              <div className="col-lg-6">
                <div className="middle" style={{fontSize:"30px"}}>
                <i class="fab fa-linkedin"></i> 
                &nbsp;&nbsp; <a href="http://linkedin.com/in/pitchayarasm" rel="noopener noreferrer" target="_blank" style={{color:"rgb(49,49,49)"}}>linkedin.com/in/pitchayarasm</a> 
                </div>
                <br/>
                <div className="middle" style={{fontSize:"30px"}}>
                <i class="fab fa-github"></i> 
                &nbsp;&nbsp; <a href="http://github.com/Pitchayarasm" rel="noopener noreferrer" target="_blank" style={{color:"rgb(49,49,49)"}}>github.com/Pitchayarasm</a> 
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )};

export default Contact;