import React from 'react';
import Navbar from '../components/Navbar';

function About() {
    return (
        <div>
            <Navbar />
        <div className= "container py-5">
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
</div>

            <div className="carousel-inner">
                {/* Slide 1: Video */}
                <div className="carousel-item active">
                    <img
                                src="/102-remmen-studiestart-2011bha.jpg"
                        className="d-block w-100"
                        alt="Second slide"
                    />
                </div>

                {/* Slide 2: Placeholder image */}
                <div className="carousel-item">
                    <img
                                src="/meta-quest-3-512gb-vr-headset.webp"
                        className="d-block w-100"
                        alt="Second slide"
                            />

                </div>

                {/* Slide 3: Your image */}
                <div className="carousel-item">
                    <img
                        src="/4DD04358-BCEC-4664-BA5319298347AC71_carouselimage.jpg"
                        className="d-block w-100"
                        alt="Third slide"
                    />
                            <div class="container">
                                <div class="carousel-caption text-end">
                                    <h1>One more for good measure.</h1>
                                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                                    <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a>
                                    </p>
                                </div>
                            </div>
                </div>
            </div>

            {/* Navigation buttons */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                    </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        </div>
    );
}

export default About;
