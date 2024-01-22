import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
  return (
    <>
    <div class="header">
      <h1>My Portfolio</h1>
      <p>Hi everyone welcome to the site.....</p>
    </div>
      <div>
        <nav>
          <Link to="/">Home Page</Link> | <Link to="/about">About Me</Link> | <Link to="/services">Services</Link> | <Link to="/project">My Project</Link> | <Link to="/contact">Contact ME</Link>
        </nav>
      </div>
      <hr />      
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </>
  );
}
