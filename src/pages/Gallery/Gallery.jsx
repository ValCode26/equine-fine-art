import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Gallery.css";

const Gallery = () => {
  // Replace with your actual image imports
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Equine Art Gallery</h1>

      {/* Main Carousel */}
      <div className="carousel">
        <button className="nav-button prev-button" onClick={prevImage}>
          <FaChevronLeft />
        </button>

        <div className="image-container" onClick={() => setShowLightbox(true)}>
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="main-image"
          />
        </div>

        <button className="nav-button next-button" onClick={nextImage}>
          <FaChevronRight />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="thumbnail-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {showLightbox && (
        <div className="lightbox" onClick={() => setShowLightbox(false)}>
          <div className="lightbox-content">
            <img
              src={images[currentIndex]}
              alt={`Full view ${currentIndex + 1}`}
              className="lightbox-image"
            />
            <button
              className="close-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowLightbox(false);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
