import React from "react";

function About() {
  return (
    <>
      <div className="container">
        <h1 style={{textAlign:"center", marginTop:"40px"}}>ABOUT ME</h1>
        <hr/>
        <br/>
        <img className="image-project" src="./images/Profile_pic.jpg" alt="Profile"/>
        <br/>
            <div className="middle" style={{fontSize:"20px", maxWidth:"100%", lineHeight:"1.8"}}>
            Pitchayarasm Kunghae is a Software Engineer specializing in back-end development who has a background in Mechanical Engineering as well as in the health care industry.
            Proficient in HTML/CSS, JavaScript, jQuery, Node.js, MERN stack (MongoDB, Express, React, Node), MySQL, TDD and unit/integration testing.
            Fast learner, hard worker, and a team player. Looking for a role to grow my experience and a great enthusiastic engineering team to work for that will provide me with challenging and interesting work.
            </div>
          </div>     
    </>
  )};

export default About;