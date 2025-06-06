import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div className="home-page">
            <Navbar />

            <div className="video-background-container">
                <video autoPlay muted loop playsInline className="video-background">
                    <source src="/141412-777708076_small.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="hero-content text-center">
                    <h1 className="display-3 fw-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Hi, I'm Patview</h1>
                    <p className="lead text-white" style={{ fontFamily: "'Playfair Display', serif" }} >A passionate Patology Image viewer.</p>
                    <div className="mt-4">
                        <a href="/projects" className="btn btn-outline-light btn-lg mx-2 button-shadow" style={{ fontFamily: "'Playfair Display', serif" }}>View Project</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
