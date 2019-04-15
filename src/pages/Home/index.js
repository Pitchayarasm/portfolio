import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Home() {
  return (
    <>
        <div className="container">
          <h1 id="name">PITCHAYARASM KUNGHAE</h1>
          <hr/>
          <h2 id="dev">Full Stack Web Developer</h2>
          <div style={{textAlign:"center"}}>
            <Link to="/about" >
              <button className="buttons">About Me</button>
            </Link>
            <Link to="/apps" >
              <button className="buttons">Apps</button>
            </Link>
            <Link to="/contact" >
              <button className="buttons">Contact</button>
            </Link>
          </div>
        </div>
    </>
  )};

export default Home;