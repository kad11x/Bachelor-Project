 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'; 
import Home from './Pages/Home'; 
import Projects from './Pages/Projects'; 
import About from './Pages/About'; 
import './App.css';
import Contact from './Pages/Contact';


function App() {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;

