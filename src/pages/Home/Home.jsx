import { Link } from "react-router-dom";
import GalleryCarousel from "../../components/GalleryCarousel/GalleryCarousel";
import "./Home.css";

// Sample images - replace with your actual images
const sampleImages = [
  "/images/horse1.jpg",
  "/images/horse2.jpg",
  "/images/horse3.jpg",
  "/images/horse4.jpg",
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-overlay"></div>
        <div className="home-hero-image"></div>
        <div className="home-hero-content">
          <h1 className="home-hero-title">Valentin Borsan Fine Equine Art</h1>
          <p className="home-hero-subtitle">
            Capturing the spirit, grace, and power of horses through fine art
            photography
          </p>
          <div className="home-hero-buttons">
            <Link to="/gallery" className="home-hero-primary-button">
              View Gallery
            </Link>
            <Link to="/shop" className="home-hero-secondary-button">
              Shop Prints
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="home-about">
        <div className="home-section-header">
          <h2 className="home-section-title">About My Work</h2>
          <div className="home-section-divider"></div>
        </div>

        <div className="home-about-grid">
          <div className="home-about-content">
            <p className="home-about-text">
              There’s a quiet honesty in the way horses move through the
              world—an instinctive grace that speaks without needing words. My
              journey with photography began through a connection with these
              animals, not just as subjects, but as companions through a time of
              personal transformation. When I photograph horses, I seek to
              capture more than their form—I want to reveal their spirit, their
              strength, and the silent dialogues they share with us. Whether in
              motion or stillness, each frame is a tribute to the bond between
              human and horse, to resilience, trust, and the beauty of being
              fully present in a fleeting moment.
            </p>
            <p className="home-about-text">
              Through my lens, I strive to showcase the unique personality of
              each horse, whether it's the power of a stallion in motion, the
              gentle grace of a mare with her foal, or the quiet dignity of an
              aging workhorse.
            </p>
            <Link to="/about" className="home-about-button">
              Learn More About Me
            </Link>
          </div>
          <div className="home-about-image-container">
            <img
              src="/images/about-preview.jpg"
              alt="Valentin Borsan photographing a horse"
              className="home-about-image"
            />
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="home-gallery">
        <div className="home-section-header">
          <h2 className="home-section-title">Featured Works</h2>
          <div className="home-section-divider"></div>
        </div>

        <div className="featured-carousel-container">
          <GalleryCarousel images={sampleImages} />
        </div>

        <div className="featured-thumbnails">
          {sampleImages.map((img, index) => (
            <div key={index} className="featured-thumbnail">
              <img src={img} alt={`Featured work ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="home-gallery-button-container">
          <Link to="/gallery" className="home-gallery-button">
            Explore Full Gallery
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home-cta">
        <div className="home-cta-content">
          <h2 className="home-cta-title">
            Ready to Bring Equine Art Into Your Space?
          </h2>
          <p className="home-cta-text">
            Each limited edition print is carefully crafted to preserve the
            beauty and detail of the original photograph, making it a timeless
            addition to your home or office.
          </p>
          <Link to="/shop" className="home-cta-button">
            Browse the Shop
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
