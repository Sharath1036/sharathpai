import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <div class="App">
    <nav class="navbar navbar-expand-md bg-custom navbar-dark fixed-top">
    <a class="navbar-brand"><img src={require("../assets/sp.avif")} class="img-fluid" height="45" width="45" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
      <li class="nav-item"><a class="nav-link" href="/projects">Projects</a></li>  
      <li class="nav-item"><a class="nav-link" href="/blogs">Blogs</a></li>
      <li class="nav-item"><a class="nav-link" href="/resume">Resume</a></li>   
    </ul>
  </div>  
</nav>
    </div>
  );
}
