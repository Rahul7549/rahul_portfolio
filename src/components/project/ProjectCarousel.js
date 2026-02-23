import React, { useState, useRef, useEffect } from "react";

const ProjectCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  const thumbRefs = useRef([]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  /* AUTO SCROLL ACTIVE THUMB */
  useEffect(() => {
    thumbRefs.current[current]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [current]);

  return (
    <div className="project-media">
      <div className="media-main">
        <img src={images[current]} alt="project screenshot" />

        {images.length > 1 && (
          <>
            <button className="arrow-btn left" onClick={prevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              </svg>
            </button>
            <button className="arrow-btn right" onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg></button>

            <div className="thumbnail-overlay">
              {images.map((img, index) => (
                <img
                  key={index}
                  ref={(el) => (thumbRefs.current[index] = el)}
                  src={img}
                  alt="thumb"
                  className={`thumbnail ${index === current ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCarousel;