import React from "react";
import "../App.css";

export default function Footer() {
    return(
        <div class="container-fluid bg1">
            <div class="row">
                <div class="col-lg-4 center-block text-center"><p>Sharath Pai</p></div>
                <div class="col-lg-4 center-block text-center"><p>Copyright © 2023 SP</p></div>
                <div class="col-lg-4 center-block text-center mx-auto d-block">
                <div class="socials"><a href="mailto:sharathpai107@gmail.com" target="_blank"><img class="icons" src={require("../assets/gmail.png")} /></a></div>    
                <div class="socials"><a href="https://www.github.com/Sharath1036/" target="_blank"><img class="icons" src={require("../assets/github.png")} /></a></div>
                <div class="socials"><a href="https://www.behance.net/sharathp2/" target="_blank"><img class="icons" src={require("../assets/behance.png")} /></a></div>
                <div class="socials"><a href="https://www.linkedin.com/in/sharathpai107" target="_blank"><img class="icons" src={require("../assets/linkedin.png")} /></a></div>
                <div class="socials"><a href="https://www.twitter.com/Sharath1072" target="_blank"><img class="icons" src={require("../assets/twitter.png")} /></a></div>
                <div class="socials"><a href="https://www.instagram.com/sharath_1007" target="_blank"><img class="icons" src={require("../assets/instagram.png")} /></a></div>
                </div>
            </div>
        </div>
    )
}