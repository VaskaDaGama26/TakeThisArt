import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import Button from "./UI/CustomButton.jsx";
import MediaGrid from "./portfolio/MediaGrid.jsx";

const Works = () => {
  const photos = [
    {
      id: 1,
      highQuality: "/TakeThisArt/photos/High1.jpg",
      alt: "Photo 1",
    },
    {
      id: 2,
      highQuality: "/TakeThisArt/photos/High2.jpg",
      alt: "Photo 2",
    },
    {
      id: 3,
      highQuality: "/TakeThisArt/photos/High5.jpg",
      alt: "Photo 3",
    },
    {
      id: 4,
      highQuality: "/TakeThisArt/photos/High6.jpg",
      alt: "Photo 4",
    },
  ];

  const videos = [
    {
      id: 1,
      src: "/TakeThisArt/video/3.mp4",
      type: "video/mp4",
    },
    {
      id: 2,
      src: "/TakeThisArt/video/2.mp4",
      type: "video/mp4",
    },
  ];

  const portfolioButton = () => {
    navigate("/portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <>
      {/* Marquee */}
      <div
        ref={ref}
        className="text-(--white) text-xl sm:text-2xl fira-sans-condensed-light mx-auto max-w-[280px] sm:max-w-lg"
      >
        <Marquee play={inView} autoFill="true">
          take\\this//art
          <span className="text-(--gray)">&nbsp;take\\this//art&nbsp;</span>
        </Marquee>
      </div>
      <p className="text-(--white) px-4 text-center fira-sans-condensed-light text-xl sm:text-2xl">
        ФОТОГРАФИЯ — СПОСОБ РАСКРЫТЬ ВАС ТАКИМИ, КАКИМИ ВЫ ЯВЛЯЕТЕСЬ НА САМОМ
        ДЕЛЕ
      </p>
      <MediaGrid photos={photos} videos={videos} />
      <Button label="Больше" action={portfolioButton} />
    </>
  );
};

export default Works;
