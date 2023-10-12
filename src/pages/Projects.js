import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../responsive.css";

export default function Projects() {
  return (
    <div className="App">
      <Navbar />
      <br/><br/><br/><br/><br/>
      <div class="container-fluid">
      <h1>My Recent <span>Works</span></h1>
      <h3>These are some of the projects I worked on recently</h3>
      <br/><br/><br/>
      <div class="row">
        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/portfolio.png")} />
          <h5>PORTFOLIO WEBSITE</h5>
          <p class="projectpara">I developed this portfolio website using ReactJS to showcase my recently built projects as well as certain blogs.</p>
          <div class="text-center">
          <a href="https://sharathpai.vercel.app/" class="btn btn-primary" role="button">DEMO</a>
          <a href="https://github.com/Sharath1036/sharathpai/" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div>

        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/SU.png")} />
          <h5>SWIFT UNDERGRADS</h5>
          <p class="projectpara">I developed this website using React JS for our startup to be used by students for getting desired study materials.</p>
          <div class="text-center">
          <a href="https://www.swiftundergrads.in" class="btn btn-primary" role="button">DEMO</a>
          <a href="https://github.com/Sharath1036/swiftundergrads/" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div>

        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/blogpage.png")} />
          <h5>BLOG PAGE</h5>
          <p class="projectpara">I developed this blog website using Express JS and Handlebars which enables users to create their own blog.</p>
          <div class="text-center">
          <a href="https://sharathblogs.vercel.app" class="btn btn-primary" role="button">DEMO</a>
          <a href="https://github.com/Sharath1036/blogpage" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div>

        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/photogallery.png")} />
          <h5>PHOTO GALLERY</h5>
          <p class="projectpara">I created a photo gallery using JavaScript which displays a preview image when hovered through an image among a set of images.</p>
          <div class="text-center">
          <a href="https://sharath1036.github.io/photogallery/" class="btn btn-primary" role="button">DEMO</a>
          <a href="https://github.com/Sharath1036/photogallery" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div>

{/*
        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/rangeela.png")} />
          <h5>RANGEELA RESORT</h5>
          <p class="projectpara">I developed this sample resort webpage to practice my HTML and CSS skills. Source code is available on my GitHub.</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/resort-webpage" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div> */}

        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/houseprice.png")} />
          <h5>HOUSE PRICE ANALYSIS</h5>
          <p class="projectpara">In this ML project we determine whether house will be sold in 3 months or not (classification) and determine its relation with other variables (regression).</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/analysis-of-house-price" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div>

        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/houseprice.png")} />
          <h5>MOVIE ANALYSIS</h5>
          <p class="projectpara">In this ML project we predict whether a movie will win an Oscar (classification) and estimate its box office collection (regression).</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/movie-analysis" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div>

        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/movieTicket.png")} />
          <h5>MOVIE TICKET SYSTEM</h5>
          <p class="projectpara">Created a movie ticket booking system using C where the ticket is printed on the basis of the user's preferences.</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/movie-ticket-booking-system" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div>

        {/* <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/calci.png")} />
          <h5>CALCULATOR USING GUI</h5>
          <p class="projectpara">Created a scientific calculator using PySimpleGUI which performs mathematical and trigonomoetic operations.</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/calculator-using-gui" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div>

        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/library.png")} />
          <h5>LIBRARY MANAGEMENT SYSTEM</h5>
          <p class="projectpara">Created a library management system using MySQL which shows the available books.</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/library-management-system" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div> */}

        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/uiux.png")} />
          <h5>UI/UX DESIGN</h5>
          <p class="projectpara">I have created certain UI/UX Design projects. You can head to my Behance profile to check out my works.</p>
          <div class="text-center">
          <a href="https://behance.net/sharathp" class="btn btn-primary" role="button">BEHANCE</a>
          </div>
          </div>
        </div>
      </div>
      </div>
      <br/><br/><br/>
      <div><Footer /></div>
    </div>
  );
}

