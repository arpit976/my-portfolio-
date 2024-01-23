import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header >
        
      <div class="header">
        <h1>My Portfolio</h1>
        <p>Hi, Welcome to the site.....</p>
      </div>
          
      <div class="topnav">
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/services">Services</a>  
        <a href="/project">Project</a>
        <a href="/contact" class="split">Contact ME</a>
      </div>
      <hr />      
      </header>
    </>
  );
}
