import React from "react";
import "../App.css";
import "../responsive.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactDoc from "../blogs/ReactDoc";

export default function Blogs() {
  return (
    <div class="container-fluid">
      <Navbar />
      <br /><br /><br /><br /><br /><br />
      <div class="container">
        <h1>Blogs</h1>
        <br />
        <div class="card bg4">
          <div class="row card-body">
            <div class="col-lg-4 blog">
              <img class="mx-auto d-block" src={require("../assets/routerDOM.png")}/>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-7 center-text">
              <h2>ReactJS: Creating React App, Routing and hosting guide.</h2>
              <p class="text-increase">In this blog, we'll see how to create, deploy and hosting a React App and how we can use Bootstrap with React...<a href="/react-routing">read more</a></p>
            </div>
          </div>
        </div>
        <br/><br/>


        <div class="card bg4">
          <div class="row card-body">
            <div class="col-lg-4 blog">
              <img class="mx-auto d-block" src={require("../assets/AI.webp")}/>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-7 center-text">
              <h2>Artificial Intelligence Roadmap</h2>
              <p class="text-increase">In this blog, I've shared the roadmap for learning the concepts of Artificial Intelligence along with resources...<a href="/artificial-intelligence-roadmap">read more</a></p>
            </div>
          </div>
        </div>
       <br /><br />


      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br />
      <Footer />
    </div>
  );
}
// Write a blog on steps while solving a ML based problem