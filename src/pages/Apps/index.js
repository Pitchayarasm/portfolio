import React from "react";
import "./style.css"

function Apps() {
  return (
    <>
        <div className="container">
            <h1 style={{textAlign:"center", marginTop:"40px"}}>APPS</h1>
            <hr/>
            <br/>
            <div className="row">
              <div className="col-lg-6">
                <div className="middle" style={{height:"612px", marginBottom:"30px"}}>
                  <h3 style={{textAlign:"center"}}>Kindeready</h3>
                  <br/>
                  <a href="http://kindeready.herokuapp.com" target="_blank" rel="noopener noreferrer"><img className="image-project" src="./images/Kindeready.png" alt="Kindeready"/></a>
                  <br/>
                  <h5>Technologies</h5>
                  <ul>
                    <div className="row">
                      <div className="col-md-6">
                        <li>HTML5</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                        <li>MVC Architecture</li>
                      </div>
                      <div className="col-md-6">
                        <li>Mysql</li>
                        <li>Sequelize.js</li>
                        <li>Express.js</li>
                        <li>Express-Session</li>
                        <li>Bcrypt.js</li>
                      </div>
                    </div>
                  </ul>
                  <h5>Account</h5>
                  <i className="fas fa-envelope"> : monster@gmail.com</i> <br/>
                  <i className="fas fa-unlock-alt"> : Movie1234</i>
                </div>

                <div className="middle" style={{height:"612px", marginBottom:"30px"}}>
                  <h3 style={{textAlign:"center"}}>Clicky Game</h3>
                  <br/>
                  <a href="http://pitchayarasm.github.io/Clicky-Game/" target="_blank" rel="noopener noreferrer"><img className="image-project" src="./images/Clicky Game.png" alt="Kindeready"/></a>
                  <br/>
                  <h5>Technologies</h5>
                  <ul>
                    <div className="row">
                      <div className="col-md-6">
                        <li>React.js</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="middle" style={{height:"612px", marginBottom:"30px"}}>
                  <h3 style={{textAlign:"center"}}>Harry Potter Trivia</h3>
                  <br/>
                  <a href="https://pitchayarasm.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer"><img className="image-project" src="./images/Harry Potter Quiz.png" alt="Harry Potter Quiz"/></a>
                  <br/>
                  <h5>Technologies</h5>
                  <ul>
                    <div className="row">
                      <div className="col-md-6">
                        <li>HTML5</li>
                        <li>jQuery</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="middle" style={{height:"612px", marginBottom:"30px"}}>
                  <h3 style={{textAlign:"center"}}>Eat-Da-Burger</h3>
                  <br/>
                  <a href="https://eat-da-da-burger.herokuapp.com" target="_blank" rel="noopener noreferrer"><img className="image-project" src="./images/burger.gif" alt="Kindeready"/></a>
                  <br/>
                  <h5>Technologies</h5>
                  <ul>
                    <div className="row">
                      <div className="col-md-6">
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>Handlebars.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
        </div>     
    </>
  )};

export default Apps;