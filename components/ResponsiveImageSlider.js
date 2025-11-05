"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

// --- Configuration ---
const TOTAL_IMAGES = 18;
const AUTOPLAY_INTERVAL = 4000; // 4 seconds
const INACTIVITY_TIMEOUT = 5000; // 5 seconds

// --- Component ---
const ResponsiveImageSlider = () => {
  // Generate the list of image URLs
  const imageUrls = Array.from(
    { length: TOTAL_IMAGES },
    (_, i) => `images/gallery/${i + 1}.jpg`
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  // Refs for timers
  const autoplayIntervalRef = useRef(null);
  const inactivityTimeoutRef = useRef(null);

  // --- Core Navigation Logic ---
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TOTAL_IMAGES);
  }, []);

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + TOTAL_IMAGES) % TOTAL_IMAGES
    );
  };
  
  const goToIndex = (index) => {
    setCurrentIndex(index);
  }

  // --- Autoplay and Inactivity Logic ---
  const resetInactivityTimer = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(() => {
      setIsAutoplaying(true);
    }, INACTIVITY_TIMEOUT);
  };

  useEffect(() => {
    if (isAutoplaying) {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      autoplayIntervalRef.current = setInterval(goToNext, AUTOPLAY_INTERVAL);
    } else {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    }
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [isAutoplaying, goToNext]);

  // --- User Interaction Handlers ---
  const handleUserInteraction = (action) => {
    setIsAutoplaying(false);
    action();
    resetInactivityTimer();
  };
  
  const handleNextClick = () => handleUserInteraction(goToNext);
  const handlePrevClick = () => handleUserInteraction(goToPrev);
  const handleDotClick = (index) => handleUserInteraction(() => goToIndex(index));


  return (
    <>
      <div className="slider-wrapper">
        {/* Left Arrow */}
        <button
          className="slider-arrow side"
          onClick={handlePrevClick}
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div className="slider-container">
          <div className="slider-images">
            {imageUrls.map((url, index) => (
              <div
                key={url}
                className={`slider-image ${
                  index === currentIndex ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${url})` }}
                aria-hidden={index !== currentIndex}
              />
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="slider-dots-nav">
            {imageUrls.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="slider-arrow side"
          onClick={handleNextClick}
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        /* This new wrapper centers the entire slider component and places the arrows */
        .slider-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 90vh; /* Use min-height to ensure it's centered even on tall screens */
          gap: 1.5rem; /* Space between arrows and slider */
        }
      
        /* The main container for the images and dots */
        .slider-container {
          position: relative;
          width: 85vw; /* 85% of the viewport width */
          max-width: 1400px; /* Optional: cap the max width on very large screens */
          aspect-ratio: 16 / 9; /* Enforces a cinematic 16:9 ratio */
          overflow: hidden;
          background-color: #111;
          border-radius: 8px; /* Optional: adds a slight curve to the corners */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          margin-top: 15px;
        }

        .slider-images {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slider-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slider-image.active {
          opacity: 1;
        }

        /* Styles for the navigation arrows */
        .slider-arrow {
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.3s ease;
          z-index: 10;
        }

        .slider-arrow:hover {
          background-color: black;
        }

        .slider-arrow svg {
          width: 2.5rem;
          height: 2.5rem;
          fill: rgba(0,0,0,0.7); /* A slightly softer white */
          transition: fill 0.3s ease;
        }

        .slider-arrow:hover svg {
          fill: #fff;
        }

        /* Container for the navigation dots */
        .slider-dots-nav {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 10;
        }

        .slider-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.4);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .slider-dot:hover {
          background-color: rgba(255, 255, 255, 0.7);
        }

        .slider-dot.active {
          background-color: #ffffff;
          transform: scale(1.2);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .slider-wrapper {
            /* On mobile, reduce the gap to save space */
            gap: 0.5rem;
          }
          .slider-container {
             /* Use more of the screen width on smaller devices */
            width: 95vw;
          }
          .slider-arrow svg {
            width: 1.75rem;
            height: 1.75rem;
          }
          .slider-dots-nav {
            bottom: 1rem;
            gap: 0.5rem;
          }
          .slider-dot {
            width: 8px;
            height: 8px;
          }
        }
      `}</style>
    </>
  );
};

export default ResponsiveImageSlider;
