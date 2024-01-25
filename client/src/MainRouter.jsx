import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../components/Home.jsx'
// import About from './src/about'

import About from './../src/about.jsx'
import Contact from './../src/contact.jsx'
import Education from './../src/services.jsx'
import Project from './../src/project.jsx'
import Layout from './../components/Layout.jsx'
const MainRouter = () => {
        return (<div>
        <Layout/>
        <Routes>
                 <Route exact path="/" element={<Home />} />
                 <Route exact path="/about" element={<About />} />
                 <Route exact path="/services" element={<Education />} />
                 <Route exact path="/project" element={<Project />} />
                 <Route exact path="/contact" element={<Contact />} />
         </Routes>
        </div>
        )
}
export default MainRouter