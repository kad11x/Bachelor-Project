import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold" style={{ fontFamily: "'Playfair Display', serif" }} to="/">Patview</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" style={{ fontFamily: "'Playfair Display', serif" }} to="/projects">Project</Link></li>
                        <li className="nav-item"><Link className="nav-link" style={{ fontFamily: "'Playfair Display', serif" }} to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" style={{ fontFamily: "'Playfair Display', serif" }} to="/contact">The Team</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
