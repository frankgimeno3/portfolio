import React from "react";
// import { Link } from "react-router-dom";
import profileImg from "../assets/fotoperfil.jpg";
import reactImg from "../assets/react.png";
import nodeImg from "../assets/node.png";
import "../App.css";


function HomePage() {
  return (
    <div className="mainComponent">
      <section className="boxcontainer">
            <div className="myName">
              <h1>Frank Gimeno</h1>
              <img className="profile-img" src={profileImg} alt="Frank Gimeno" />
            </div>
            <p>Full-stack web developer, Tech enthusiast, Pizza devourer</p>
            <div className="frontendBackend">
                    <img className="rounded-img " src={reactImg} alt="ReactJS" />
                    <img className="rounded-img" src={nodeImg} alt="NodeJS" />
            </div>
          <section className=" secondQuadrant">
            {/* <h3>, , , , ,  </h3> */}
            <div class="cardz">
                <p><span>JS (ES6)</span></p>
                <p><span>React</span></p>
                <p><span>Express</span></p>
                <p><span>NodeJS</span></p>
                <p><span>Git</span></p>
                <p><span>MongoDB</span></p>
                <p><span>HTML & CSS</span></p>
            </div>          
            </section>
      </section>
    </div>
  );
}

export default HomePage;