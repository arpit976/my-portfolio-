import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
// import About from './src/about'

import About from './about.jsx'
import Contact from './contact.jsx'
import Education from './services.jsx'
import Project from './project.jsx'
import Layout from './components/Layout.jsx'
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