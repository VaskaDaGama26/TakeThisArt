import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const PortfolioVideoItem = ({ video }) => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: false,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsLoaded(true);
      };

      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative w-[300px] h-[380px] xl:w-[400px] xl:h-[506px] overflow-hidden"
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse"></div>
      )}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover ${isLoaded ? "block" : "hidden"}`}
        loop
        muted
        playsInline
      >
        <source src={video.src} type={video.type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PortfolioVideoItem;
