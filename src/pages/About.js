import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function About() {
  return (
    <div className="App">
      <Navbar />
      <br/><br/><br/><br/><br/><br/>
      <div class="container">
      <h1>MORE ABOUT <span>ME</span></h1>
      <br/>
        <div class="row">

          <div class="col-lg-7 intro">
            <p>Hi, I am <span>Sharath Pai</span> from <span>Mumbai, India.</span></p>
            <p>I am pursuing a <span>Bachelors</span> in <span>Electronics and Telecommunication Engineering</span> from <span>Mumbai University.</span></p>
            <br/>
            <p class="list-items">Some other hobbies of mine apart from coding are:</p>
            <ul class="list-items">
              <li>Travelling</li>
              <li>Watching and playing sports such as cricket, football, kabaddi</li>
              <li>Watching anime</li>
            </ul>
            </div>
          <div class="col-lg-5 img1">
            <img class="mx-auto d-block" src={require("../assets/Sharath.jpg")} />
          </div>
      </div>
    </div>
    
    <br/><br/><br/><br/><br/>
    <div class="container">
      <h1>TECHNICAL <span>SKILLS & TOOLS</span></h1>
      <br/>
      <div class="row">

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/bootstrap.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/c.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/cpp.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/css.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/html.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/figma.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/git.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/javascript.png')} /></div>
        </div>
        
        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/mysql.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/nodejs.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/php.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/python.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/react.png')} /></div>
        </div>        

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/rpro.png')} /></div>
        </div>
        
        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/wordpress.png')} /></div>
        </div>

        
    </div>
    </div>
    <br/><br/><br/>
    <div><Footer /></div>
    </div>
  );
}
