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
                <div className="middle" style={{height:"690px", marginBottom:"30px"}}>
                  <h3 style={{textAlign:"center"}}>Eat Something</h3>
                  <br/>
                  <a href="http://eat-sth.herokuapp.com" target="_blank" rel="noopener noreferrer"><img className="image-project" src="./images/Eat Something.png" alt="Kindeready"/></a>
                  <br/>
                  <h5>Technologies</h5>
                  <ul>
                    <div className="row">
                      <div className="col-md-6">
                        <li>React.js</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Mongodb</li>
                        <li>Mongoose</li>
                        <li>Morgan</li>
                        <li>Axios.js</li>
                        <li>Cheerio</li>
                      </div>
                    </div>
                  </ul>
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
                  <h3 style={{textAlign:"center"}}>Google Books Search</h3>
                  <br/>
                  <a href="http://google-book-search-reactjs.herokuapp.com" target="_blank" rel="noopener noreferrer"><img className="image-project" src="./images/Google Book.png" alt="Kindeready"/></a>
                  <br/>
                  <h5>Technologies</h5>
                  <ul>
                    <div className="row">
                      <div className="col-md-6">
                        <li>React.js</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>Mongodb</li>
                        <li>Mongoose</li>
                        <li>Express.js</li>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="middle" style={{height:"690px", marginBottom:"30px"}}>
                  <h3 style={{textAlign:"center"}}>Tripper</h3>
                  <br/>
                  <a href="http://tripper-2019.herokuapp.com" target="_blank" rel="noopener noreferrer"><img className="image-project" src="./images/Tripper.png" alt="Tripper"/></a>
                  <br/>
                  <h5>Technologies</h5>
                  <ul>
                    <div className="row">
                      <div className="col-md-6">
                        <li>React.js</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>Sass</li>
                        <li>Materialize</li>
                        <li>Axios.js</li>
                        <li>Bcrypt.js</li>
                        <li>Fs.js</li>
                      </div>
                      <div className="col-md-6">
                        <li>Mongodb</li>
                        <li>Mongoose</li>
                        <li>Express.js</li>
                        <li>Passport.js</li>
                        <li>Socket.io</li>
                        <li>Express-Session</li>
                        <li>Gridfs-Stream</li>
                        <li>Connect-Multiparty</li>
                      </div>
                    </div>
                  </ul>
                  <h5>Account</h5>
                    <i className="fas fa-envelope"> : monster@gmail.com</i> <br/>
                    <i className="fas fa-unlock-alt"> : Movie1234</i>
                </div>
              </div>
            </div>
        </div>     
    </>
  )};

export default Apps;