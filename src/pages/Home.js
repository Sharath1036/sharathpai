import React from "react";
import "../App.css";
import "../typewrite.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../responsive.css";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <br/><br/><br/><br/><br/>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-block justify-content-center p-5">
          <h3 class="large-header">Hi! I am <span>Sharath Pai</span></h3><br/><h4 align="center" class="large-header"><span class="typewriter"></span></h4><br/>
          </div>
          <div className="col-lg-5 shrink">
            <img class="mx-auto d-block shrink-img" src={require("../assets/coding.webp")} />
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1>ABOUT MY <span>JOURNEY</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 intro">
            <p>I started programming and designing for our startup and it eventually became a passion for me. </p>
            <p>I have a good command over tech stacks such as <span>HTML, CSS, React, Bootstrap, R, etc.</span></p>
            <p>My areas of interest are <span>Designing</span>, building <span>Websites</span> as well as <span>Data Science</span> and I'm thinking of expanding my skillset in the domain of <span>Backend Development, App Development and Blockchain Development.</span></p>
            <p>Currently I'm testing my <span>Backend Dev</span> skills by making freelance websites using <span>Express JS.</span></p>
          </div>
          <div className="col-lg-5 img1">
            <img class="mx-auto d-block" src={require("../assets/man.webp")} />
          </div>
        </div>
      </div>
      <br/><br/><br/>
      <div><Footer /></div>
    </div>
  );
}

export default Home;
