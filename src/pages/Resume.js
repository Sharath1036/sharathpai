import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <div className="App">
      <Navbar />
      <br /><br /><br /><br /><br />
      <div class="container">
        <div class="col-lg-12 text-center">
          <a href={require("../assets/Sharath_Resume.pdf")} class="btn btn-primary" role="button" target="_blank">DOWNLOAD RESUME</a>
        </div>
        <br />
        {/*<embed class="mx-auto d-block" src={require("../assets/Sharath_UIUX.pdf#toolbar=0&navpanes=0&scrollbar=0")} type="application/pdf" width="70%" height="1010px" />*/}
        <div><img class="mx-auto d-block" src={require("../assets/Sharath_Resume.jpg")} width="90%" /></div>
        <br />
        <div class="col-lg-12 text-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSesqyyJoPyK0yznHf0u55p3aCmTsAn-BNW2rzuTPO8Gop004g/viewform?usp=sharing" class="btn btn-primary" role="button" target="_blank">HIRE ME AS YOUR DEVELOPER</a>
        </div>
      </div>
    <br/><br/>
    <div class="mgn"><Footer /></div>
    </div>
  );
}
