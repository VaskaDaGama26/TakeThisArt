import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const VideoItem = ({ video }) => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: false,
  });

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative w-[280px] h-[350px] lg:w-[400px] lg:h-[506px] sm:w-[300px] sm:h-[380px] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
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

export default VideoItem;
