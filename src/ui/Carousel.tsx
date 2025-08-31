import { useState, useEffect, useRef, useCallback } from 'react';

export interface CarouselImage {
  name: string;
  path: string;
}

interface CarouselProps {
  images: CarouselImage[];
  interval?: number; 
}

export const Carousel = ({ images, interval = 5000 }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<number | null>(null);

  if (!images.length) {
    return <div>No images available</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(goToNextSlide, interval);
  }, [goToNextSlide, interval]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  const currentImage = images[currentSlide];

  return (
    <div
      className="carousel"
      style={{ backgroundImage: `url(${currentImage.path})` }}
      role="img"
      aria-label={currentImage.name}
    >
      <div className='carousel__button-wrapper carousel__button-wrapper--prev'>
        <button
          className='carousel__button'
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          &lt;
        </button>
      </div>
      <div className='carousel__button-wrapper carousel__button-wrapper--next'>
        <button
          className='carousel__button'
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;