import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../responsive.css";

export default function ReactDoc () {
    return (
        <div>
        <div class="container-fluid bg2">
        <Navbar/>
        <br/><br/><br/><br/>
        <div class="container">
            <h2>ReactJS: Creating React App, Routing and hosting guide.</h2>
            <p>In this blog, we'll see how to create a React App, routing it and deploying it and hosting it.</p>
            <hr/>
            <h4>Installing Node</h4>
            <p>For creating a React App, NodeJS needs to be installed. You can install it from: <a href="https://nodejs.org/">https://nodejs.org/</a></p>
            <p>After installing, open command prompt and run the following commands.</p>
            <div class="card"><div class="card-body"><code>node -v<br/>npm -v</code></div></div><br/>
            <p>Both these commands display the version of node and npm that have been succesfully installed.</p>
            <hr/>

            <h4>Setting up React App</h4>
            <p>Now that we have node and npm, we can create a React application named <code>first-react-app</code></p>
            <p>Run this command to create the application <code>first-react-app</code>: </p>
            <div class="card"><div class="card-body"><code>npx create-react-app first-react-app</code></div></div><br/>

            <p>Run this command to move to the <code>first-react-app</code> directory.</p>
            <div class="card"><div class="card-body"><code>cd first-react-app</code></div></div><br/>

            <p>Run this command to check in which the <code>first-react-app</code> directory is stored.</p>
            <div class="card"><div class="card-body"><code>dir</code></div></div><br/>

            <p>Run this command to move to the <code>first-react-app</code> directory.</p>
            <div class="card"><div class="card-body"><code>cd first-react-app</code></div></div><br/>
            
            <p>Run this command to start the React application.</p>
            <div class="card"><div class="card-body"><code>npm start</code></div></div><br/>

            <p>A browser will open up with the newly created React application. If not type <code>localhost:3000</code> in the browser to run the application.</p>
            <img class="shrink-img" src={require("../assets/reactApp.png")} />
            <hr/>

            <h4>Running React Application on Mobile Devices, Tablets</h4>
            <p>After running the <code>npm start</code> command you'll see the following lines in your terminal</p>
            <div class="card"><div class="card-body"><pre>
                You can now view create-react-app in the browser. <br/>
                Local: http://localhost:3000 <br/>
                <mark>On Your Network: http://192.168.1.3:3000</mark>
            </pre></div></div><br/>
            <p>Run the URL of the highlighted line on your mobile phone's browser. Make sure both of your devices are connected to the same network.</p>
            <hr/>

            <h4>React Router DOM</h4>
            <p>React Router DOM is used to create a navigation system that allows users to navigate between different pages in a multi-page website. In other words, you can use React Router DOM to create a navbar that contains links to different pages in the website. When a user clicks on a link in the navbar, React Router DOM will navigate the user to the corresponding page.</p>
            <br/>
            <p>Run this command to install React Router DOM</p>
            <div class="card"><div class="card-body"><code>npm install react-router-dom</code></div></div><br/><br/>

            <p>To create an application with multiple pages, we need to create different folders for different files, to keep the workspace organized.</p>
            <p>Within the <code>src</code> folder, we'll create a folder name called <code>pages</code> which will contain the menu items. For navigation and footer, we'll create a folder called <code>components</code> in the <code>src</code> folder. Components are reusable and you can call them in multiple pages.</p>
            <p>For images you can create a folder <code>src/assets/</code></p>
            <p><code>src/pages/</code>:</p>
            <ul><code>
                <li>Home.js</li>
                <li>About.js</li>
                <li>Projects.js</li>
                <li>Blogs.js</li>
                <li>Resume.js</li>
                <li>ErrorPage.js</li>
            </code></ul>

            <p><code>src/components/</code>:</p>
            <ul><code>
                <li>Navbar.js</li>
                <li>Footer.js</li>
            </code></ul>

            <img class="shrink-img" src={require("../assets/folders.png")} />
            <hr/>

            <h4>Routing Pages</h4>
            <p>We'll use React Router to route to pages based on URL.</p><br/>
            <p><code>App.js</code></p>
            <div class="card brdr"><div class="card-body"><pre>
            {"import React from 'react';"} <br/>
            {"import { Routes, Route, BrowserRouter } from 'react-router-dom';"} <br/>
            {"import Home from './pages/Home/';"} <br/>
            {"import About from './pages/About';"} <br/>
            {"import Projects from './pages/Projects';"} <br/>
            {"import Blogs from './pages/Blogs'"} <br/>
            {"import Resume from './pages/Resume';"} <br/>
            {"import ErrorPage from './pages/ErrorPage';"} <br/>

            {"export default function App(){"} <br/>
            {"return("} <br/>
            {"<BrowserRouter>"} <br/>
            {"      <Routes>"} <br/>
            {"         <Route path='/'element={<Home />} />"} <br/>
            {"         <Route path='/about'element={<About />} />"} <br/>
            {"         <Route path='/projects'element={<Projects />} />"} <br/>
            {"         <Route path='/blogs'element={<Blogs />} />"} <br/>
            {"         <Route path='/resume'element={<Resume />} />"} <br/>
            {"         <Route path='*'element={<ErrorPage />} />"} <br/>
            {"       </Routes>"} <br/>
            {" </BrowserRouter>"} <br/>
            {" )"} <br/>
            {" }"}

            </pre></div></div><br/>

            <p><code>components/Navbar.js</code></p>
            <div class="card brdr"><div class="card-body"><pre>
                    {'import React from "react";'}<br/>
                    {'import "../App.css";'}<br/>

                    {'export default function Navbar() {'}<br/>
                    {'return ('}<br/>
                    {'<div class="App">'}<br/>
                    {'    <nav class="navbar navbar-expand-md bg-custom navbar-dark fixed-top">'}<br/>
                    {'    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">'}<br/>
                    {'      <span class="navbar-toggler-icon"></span>'}<br/>
                    {'    </button>'}<br/>
                    {'     <div class="collapse navbar-collapse" id="collapsibleNavbar">'}<br/>
             <mark> {'         <ul class="navbar-nav ml-auto">'}<br/>
                    {'         <li class="nav-item"><a class="nav-link" href="/">Home</a></li>'}<br/>
                    {'         <li class="nav-item"><a class="nav-link" href="/about">About</a></li>'}<br/>
                    {'         <li class="nav-item"><a class="nav-link" href="/projects">Projects</a></li>'}<br/>
                    {'         <li class="nav-item"><a class="nav-link" href="/blogs">Blogs</a></li>'}<br/>
                    {'         <li class="nav-item"><a class="nav-link" href="/resume">Resume</a></li>'}<br/>
                    {'         </ul>'}<br/></mark>
                    {'      </div>  '}<br/>
                    {'      </nav>'}<br/>
                    {'</div>'}<br/>
                   {' );'}<br/>
                    {'}'}
            </pre></div></div><br/>
            <p>The highlighted lines mention how pages are routed using {"<a>"} and now you're done linking various pages.</p>
            <p>For the files in <code>pages</code> you need to code normally like you do in React making sure they're exported properly in <code>App.js</code></p>
            <p>Additionally, you might need to use a require() function for your images to be rendered properly. Eg: {'<img src={require("../assets/logo.png")} />'}</p><hr/>

            <h4>Using Bootstrap with React</h4>
            <p>Bootstrap can be used inside React App to style elements dynamically. We need to use Bootstrap 4 or 5 as Bootstrap 3 is no longer compatible with hosting providers and it offers less productivity and responsiveness as compared to latter versions.</p>
            <p>The simplest method to use Bootstrap is by using Bootstrap CDN in <code>public/index.html</code> file.</p>
            <p>In this tutorial we'll use the CDN of Bootstrap 4.</p>
            <p>Mention the following links inside <code>index.html</code></p>
            <div class="card"><div class="card-body"><code>
                <pre>
                {'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">'}<br/>
                {'<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>'}<br/>
                {'<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>'}
                </pre></code></div></div><br/>
            <p>That's it! You can now use Bootstrap styles and classes inside your React App. Make sure all the three links are mentioned in the same order as above.</p><hr/>


            <h4>Pushing the code to GitHub</h4>
            <p>After you're done coding with the entire app, we'll push it to GitHub.</p>
            <p>First create a new repository. You can name it anything, for this tutorial, we'll name it <code>first-react-app</code></p>
            <img class="shrink-img" src={require("../assets/repo.png")} /><br/><br/>
            <p>Keep the other settings intact and click on create repository.</p>
            <br/>
            <p>Run the following commands to push your code to the GitHub repository.</p>
            <div class="card"><div class="card-body"><pre>
                <code>git init <br/>
                      git add . <br/>
                      git commit -m "first commit" <br/>
                      git branch -M main <br/>
                      git remote add origin https://github.com/username/first-react-app.git <br/>
                      git push -u origin main
                </code></pre></div></div><br/>
            <p>Now click on the <code>Code</code> menu in GitHub and all you'll see your project folder has been deployed to GitHub.</p>
            <img class="shrink-img" src={require("../assets/repoCode.png")} /><br/><br/><hr/>

            <p>Later on, when you want to make changes in the code and push the changes on GitHub, you can run the following commands:</p>
            <div class="card"><div class="card-body"><pre>
                <code>git status  //shows all the modified files and working files <br/><br/>
                      //For adding all the untracked files <br/>
                      git add file_path1 file_path2 <br/>
                      git commit -m "your message" <br/><br/>
                    
                      //For removing deleted files<br/>
                      git rm file_path1 file_path2 <br/>
                      git commit -m "your message" <br/><br/>

                      //For commiting only modified files <br/>
                      git commit -m "your message" file_path1 file_path2 <br/>
                      git push -u origin main              
                </code></pre></div></div><hr/>

            <h4>Hosting our React App</h4>
            <p>React Router oriented websites do not integrate well with GitHub Pages. So we cannot host our website on GitHub. However, we can use other hosting options like Netlify, Vercel, Heroku, Digital Ocean, etc. In these websites, you just need to create an account, link your account to GitHub and then you can select the repository which you want to host. Click on deploy and it will process everything automatically. If you want to make changes in the code later on you just need to push the repository to GitHub and the changes will be made automatically.</p><hr/>

            <p align="center">Written by</p>
            <p align="center"><i>~Sharath Pai</i></p>         
        </div>
        <br/><br/><br/>
        </div>
        <div><Footer/></div>
        </div>
    )
}