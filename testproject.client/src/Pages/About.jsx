
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import './About.css';

function About() {
    return (
        <div>
            <Navbar />
            <div className="container-about">

                {/* Carousel 1 */}
                <Carousel
                    id="carousel1"
                    slides={[
                        {
                            image: "/method.jpg",
                            caption: {
                                title: "The Challenge",
                                text: "Inefficient tools for remote diagnostics and teaching.",
                                linkHref: "#"
                            }
                        },
                        {
                            image: "/method.jpg",
                            caption: {
                                text: "Inefficient tools for remote diagnostics and teaching.",
                                linkHref: "#"
                            }
},
                        {
                            image: "/workspace.jpg",
                            caption: {
                                text: "Lack of mobility and flexibility for pathologists.",
                                linkHref: "#"
                            }                        },
                        {
                            image: "/workspace2.jpg",
                            caption: {
                                text: "Static and limited PC-based analysis.",
                                linkHref: "#"
                            }
                        }
                    ]}
                />

                {/* Carousel 2 */}
                <Carousel
                    id="carousel2"
                    slides={[
                        {
                            image: "/102-remmen-studiestart-2011bha.jpg",
                            caption: {
                                title: "The Solution",
                                text: "No PC required – standalone immersive experience.",
                                linkHref: "#"
                            }
                        },
                        {
                            image: "/102-remmen-studiestart-2011bha.jpg",
                            caption: {
                                text: "No PC required – standalone immersive experience.",
                                linkHref: "#"
                            }
},
                        {
                            image: "/meta-quest-3-512gb-vr-headset.webp",
                            caption: {
                                text: "Custom-built VR prototype using Meta Quest 3.",
                                linkHref: "#"
                            }                        },
                        {
                            image: "/4DD04358-BCEC-4664-BA5319298347AC71_carouselimage.jpg",
                            caption: {
                                text: "Zoom, pan, and tile-based high-res image viewing.",
                                linkHref: "#"
                            }
                        }
                    ]}
                />

                {/* Carousel 3 */}
                <Carousel
                    id="carousel3"
                    slides={[
                        {
                            image: "/102-remmen-studiestart-2011bha.jpg",
                            caption: {
                                title: "Impact",
                                text: "No PC required – standalone immersive experience.",
                                linkHref: "#"
                            }
                        },
                        {
                            image: "/students-working.jpg",
                            caption: {
                                text: "Successfully tested at Sykehuset Østfold.",
                                linkHref: "#"
                            }
},
                        {
                            image: "/hospital-team.jpg",
                            caption: {
                                text: "Increased flexibility for pathologists.",
                                linkHref: "#"
                            }                        },
                        {
                            image: "/technology-lab.jpg",
                            caption: {
                                text: "Future use in training, diagnostics & remote work.",
                                linkHref: "#"
                            }
                        }
                    ]}
                />

            </div>
        </div>
    );
}

export default About;
