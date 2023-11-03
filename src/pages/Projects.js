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
      <br/><br/>

      <h1 class="projhead">Web Development and Design</h1> 
      <br/>
      <div class="row">
        <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/portfolio.png")} />
          <h5>PORTFOLIO WEBSITE</h5>
          <p><em class="mb-0">Tech Stacks: ReactJS</em></p>
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
          <p><em class="mb-0">Tech Stacks: ReactJS</em></p>
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
          <p><em class="mb-0">Tech Stacks: ExpressJS, Handlebars</em></p>
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
          <p><em class="mb-0">Tech Stacks: JavaScript</em></p>
          <p class="projectpara">I created a photo gallery which displays a preview image when hovered through a set of images.</p>
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
          <p><em class="mb-0">Tech Stacks:</em></p>
          <p class="projectpara">I developed this sample resort webpage to practice my HTML and CSS skills. Source code is available on my GitHub.</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/resort-webpage" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div> */}

        {/* <div class="col-lg-4 prj">
          <div class="jumbotron img3">
          <img class="mx-auto d-block" src={require("../assets/calci.png")} />
          <h5>CALCULATOR USING GUI</h5>
          <p><em class="mb-0">Tech Stacks:</em></p>
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
          <p><em class="mb-0">Tech Stacks:</em></p>
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
          <p><em class="mb-0">Tech Stacks: Figma</em></p>
          <p class="projectpara">I have created certain UI/UX Design projects. You can head to my Behance profile to check out my works.</p>
          <div class="text-center">
          <a href="https://behance.net/sharathp" class="btn btn-primary" role="button">BEHANCE</a>
          </div>
          </div>
        </div>
      </div>
      <br/><br/>

        <h1 class="projhead">Data Science and Machine Learning</h1> 
        <br/>
        <div class="row">
        <div class="col-lg-4 prj">
          <div class="jumbotron ml">
          <img class="mx-auto d-block" src={require("../assets/ml.png")} />
          <h5 class="mt-4">HOUSE PRICE PREDICTION</h5>
          <p><em class="mb-0">Tech Stacks: R</em></p>
          <p class="projectpara">In this project we predict the house price (Regression) and its sales in 3 months (Classification).</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/house-price-and-sales-prediction" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div>

        <div class="col-lg-4 prj">
          <div class="jumbotron ml">
          <img class="mx-auto d-block" src={require("../assets/ml.png")} />
          <h5 class="mt-4">MOVIE ANALYSIS</h5>
          <p><em class="mb-0">Tech Stacks: R</em></p>
          <p class="projectpara">In this project we predict the box office collection (Regression) and Oscar prediction(Classification).</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/movie-analysis" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div>  

        <div class="col-lg-4 prj">
          <div class="jumbotron ml">
          <img class="mx-auto d-block" src={require("../assets/ml.png")} />
          <h5 class="mt-4">FASHION MNIST</h5>
          <p><em class="mb-0">Tech Stacks: R, Keras, Tensorflow</em></p>
          <p class="projectpara">We segregate grey scale images into various classes of clothing categories using Neural Networks.</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/fashion-mnist" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div> 

        <div class="col-lg-4 prj">
          <div class="jumbotron ml">
          <img class="mx-auto d-block" src={require("../assets/ml.png")} />
          <h5 class="mt-4">EDUCATIONAL DECISIONS ML</h5>
          <p><em class="mb-0">Tech Stacks: R</em></p>
          <p class="projectpara">Implemented a research paper for predicting various trends revolving around engineering admissions.</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/predictive-ml-for-educational-decisions" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div> 

        <div class="col-lg-4 prj">
          <div class="jumbotron ml">
          <img class="mx-auto d-block" src={require("../assets/ml.png")} />
          <h5 class="mt-4">CATS & DOGS CLASSIFIER</h5>
          <p><em class="mb-0">Tech Stacks: R, Keras, Tensorflow</em></p>
          <p class="projectpara">We classify the collection of images correctly, distinguishing between cats and dogs using CNN.</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/cats-and-dogs-classifier" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div> 

        <div class="col-lg-4 prj">
          <div class="jumbotron ml">
          <img class="mx-auto d-block" src={require("../assets/ml.png")} />
          <h5 class="mt-4">BREAST CANCER DETECTION</h5>
          <p><em class="mb-0">Tech Stacks: R</em></p>
          <p class="projectpara">We diagnose whether a breast mass is malignant or benign using Classification Models.</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/breast-cancer-detection" class="btn btn-primary" role="button">GITHUB</a>
          </div>
          </div>
        </div> 

        <div class="col-lg-4 prj">
          <div class="jumbotron ml">
          <img class="mx-auto d-block" src={require("../assets/ml.png")} />
          <h5 class="mt-4">TITANIC ML FROM DISASTER</h5>
          <p><em class="mb-0">Tech Stacks: R</em></p>
          <p class="projectpara">We build a predictive model to classify whether a passenger survived or not based on the available features.</p>
          <div class="text-center">
          <a href="https://github.com/Sharath1036/titanic-ml-from-disaster" class="btn btn-primary" role="button">GITHUB</a>
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

