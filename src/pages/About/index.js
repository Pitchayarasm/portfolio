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
              Pitchayarasm Kunghae is a Full Stack Developer specializing in back end development 
              who has a background in Mechanical Engineering as well as a
              Bachelor's Degree in the industry , whose recent work was in Aerospace. 
              Proficient in HTML/CSS, JavaScript, jQuery, Node.js, MERN stack (MongoDB, Express, React, Node), and MySQL.
              Fast learner, hard worker and team player. Looking for a great, enthusiastic engineering team to work for 
              that will provide me with challenging, interesting work that I can learn from and contribute to.
            </div>
          </div>     
    </>
  )};

export default About;