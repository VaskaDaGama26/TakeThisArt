import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const PortfolioPhotoItem = ({ photo }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="relative w-[300px] h-[380px] xl:w-[400px] xl:h-[506px] overflow-hidden">
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse"></div>
      )}

      {/* High-quality photo loads lazily when visible */}
      {inView && (
        <img
          src={photo.highQuality}
          alt={photo.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default PortfolioPhotoItem;
