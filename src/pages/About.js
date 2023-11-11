import React from "react";
import "../App.css";
import "../responsive.css";
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
          <div class="col-lg-5 sharath">
            <img class="mx-auto d-block" src={require("../assets/Sharath.jpg")}  />
          </div>
      </div>
    </div>
    
    <br/><br/><br/><br/><br/>
    <div class="container">
      <h1>TECHNICAL <span>SKILLS & TOOLS</span></h1>
      <br/>
      <div class="row">

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://cdn.worldvectorlogo.com/logos/c-1.svg' /></div>
        </div>
        
        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://www.vectorlogo.zone/logos/python/python-icon.svg' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg' /></div>
        </div> 

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://img.icons8.com/ios/50/ffffff/express-js.png' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src={require('../assets/handlebars.png')} /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://img.icons8.com/color/48/numpy.png' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://img.icons8.com/color/48/pandas.png' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://seeklogo.com/images/S/seaborn-logo-244EB2DEC5-seeklogo.com.png' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://seeklogo.com/images/S/scikit-learn-logo-8766D07E2E-seeklogo.com.png' /></div>
        </div>

        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg' /></div>
        </div>
        
        <div class="col-lg-3">
          <div class="jumbotron img2"><img class="mx-auto d-block" src='https://www.vectorlogo.zone/logos/figma/figma-icon.svg' /></div>
        </div>        

        
        


        
    </div>
    </div>
    <br/><br/><br/>
    <div><Footer /></div>
    </div>
  );
}
