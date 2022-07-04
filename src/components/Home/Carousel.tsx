import { Box } from '@mui/material';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import React, { useState, useEffect, useCallback } from 'react';

//Data
import CarouselData from 'Data/Home/Carousel.data';

const Carousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
  }) as UseEmblaCarouselType;

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);
  return (
    <Box>
      <Box className="embla">
        <Box className="embla__viewport" ref={viewportRef}>
          <Box className="embla__container">
            {CarouselData.map((item, i) => (
              <Box className="embla__slide" key={i}>
                <Box component="img" src={item.img} alt={item.alt} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;

//Button Props
interface ButtonProps {
  selected: boolean;
  onClick: () => void;
}
const DotButton = ({ selected, onClick }: ButtonProps) => (
  <button
    className={`embla__dot ${selected ? 'is-selected' : ''}`}
    type="button"
    onClick={onClick}
  />
);
