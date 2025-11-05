"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

// --- Configuration ---
// Easily change the number of images or the autoplay interval here.
const TOTAL_IMAGES = 18;
const AUTOPLAY_INTERVAL = 4000; // 4 seconds
const INACTIVITY_TIMEOUT = 5000; // 5 seconds

// --- Component ---
const ResponsiveImageSlider = () => {
  // Generate the list of image URLs based on the total count.
  const imageUrls = Array.from(
    { length: TOTAL_IMAGES },
    (_, i) => `images/gallery/${i + 1}.jpg`
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  // Refs to hold timer IDs, allowing us to clear them.
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

  // --- Autoplay and Inactivity Logic ---

  // Function to reset the inactivity timer.
  // This is called whenever the user manually navigates.
  const resetInactivityTimer = () => {
    // Clear any existing inactivity timer
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    // Set a new timer to resume autoplay after the specified delay
    inactivityTimeoutRef.current = setTimeout(() => {
      setIsAutoplaying(true);
    }, INACTIVITY_TIMEOUT);
  };

  // Main effect to handle the autoplay interval.
  useEffect(() => {
    // If autoplay is enabled, set up the interval.
    if (isAutoplaying) {
      // Clear any existing interval to prevent duplicates.
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      // Start a new interval to advance to the next slide.
      autoplayIntervalRef.current = setInterval(goToNext, AUTOPLAY_INTERVAL);
    } else {
      // If autoplay is disabled (due to user interaction), clear the interval.
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    }

    // Cleanup function: This runs when the component unmounts or dependencies change.
    // It's crucial for preventing memory leaks.
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [isAutoplaying, goToNext]); // Rerun this effect if isAutoplaying or goToNext changes.

  // --- User Interaction Handlers ---

  const handleNextClick = () => {
    setIsAutoplaying(false); // Pause autoplay
    goToNext();
    resetInactivityTimer(); // Reset the timer to resume autoplay later
  };

  const handlePrevClick = () => {
    setIsAutoplaying(false); // Pause autoplay
    goToPrev();
    resetInactivityTimer(); // Reset the timer to resume autoplay later
  };

  return (
    <>
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

        {/* Left Arrow */}
        <button
          className="slider-arrow left"
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

        {/* Right Arrow */}
        <button
          className="slider-arrow right"
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

      {/* --- Styles ---
          Using JSX-scoped CSS for a self-contained component.
          This can be moved to a separate .css file if preferred.
      */}
      <style jsx>{`
        .slider-container {
          position: relative;
          width: 100%;
          height: 100vh; /* Full viewport height for a cinematic feel */
          overflow: hidden;
          background-color: #000; /* Fallback for when images are loading */
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
          /* This is where the magic happens: smooth opacity fade with easing */
          transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth easing */
        }

        .slider-image.active {
          opacity: 1;
        }

        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background-color: rgba(0, 0, 0, 0.3);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }

        .slider-arrow:hover {
          background-color: rgba(0, 0, 0, 0.6);
        }

        .slider-arrow.left {
          left: 2rem;
        }

        .slider-arrow.right {
          right: 2rem;
        }

        .slider-arrow svg {
          width: 2rem;
          height: 2rem;
          fill: white;
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .slider-arrow {
            padding: 0.75rem;
          }
          .slider-arrow.left {
            left: 1rem;
          }
          .slider-arrow.right {
            right: 1rem;
          }
          .slider-arrow svg {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default ResponsiveImageSlider;
