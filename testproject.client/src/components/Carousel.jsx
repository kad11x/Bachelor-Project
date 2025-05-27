import React from 'react';
import './Carousel.css'; // Optional: Add styling later if needed

function Carousel({ id, slides }) {
    return (
        <div id={id} className="my-carousel carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target={`#${id}`}
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={slide.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        {slide.caption && (
                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>{slide.caption.title}</h1>
                                    <p>{slide.caption.text}</p>
                                    {/*<p><a className="btn btn-lg btn-primary" href={slide.caption.linkHref}>Browse gallery</a></p>*/}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
