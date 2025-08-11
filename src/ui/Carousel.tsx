
import React, { useState, useEffect, useRef } from 'react';

export interface CarouselImage {
  imageBackground: string;
  name: string;
  path: string;
}

type Variant = 'main' | 'products';

interface CarouselProps {
  images: CarouselImage[];
  variant?: Variant;
  interval?: number; 
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  variant = 'main',
  interval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<number | null>(null);
  
  if (!images.length) {
    return <div>No images available</div>;
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };


  const resetTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(goToNextSlide, interval);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    timerRef.current = window.setInterval(goToNextSlide, interval);
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [interval]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    resetTimer();
  }, [currentSlide]);

  const currentImage = images[currentSlide];

  return (
    <div
      className="carousel"
      style={{
        backgroundImage: `url(${currentImage.path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        width: '100%',
        height: '400px',
        color: '#fff',
      }}
      aria-label="carousel"
    >
      {variant === 'main' && (
        <div className="link__wrapper" style={{ position: 'absolute', bottom: 20, left: 20 }}>
          <a href={currentImage.path} className="link__carousel" style={{ color: '#fff', textDecoration: 'underline' }}>
            {currentImage.name}
          </a>
        </div>
      )}

      <button
        onClick={goToPrevSlide}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          border: 'none',
          color: 'white',
          padding: '0.5em 1em',
          cursor: 'pointer',
        }}
      >
        Prev
      </button>

      <button
        onClick={goToNextSlide}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          border: 'none',
          color: 'white',
          padding: '0.5em 1em',
          cursor: 'pointer',
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;