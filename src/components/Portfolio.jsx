import React, { act } from "react";
import PortfolioData from "../PortfolioData.json";
import PortfolioItem from "./portfolio/PortfolioPhotoItem";
import Heading from "./UI/Heading";
import PortfolioVideoItem from "./portfolio/PortfolioVideoItem";

const Portfolio = () => {
  const button1 = "Фото";
  const button2 = "Видео";
  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto px-2 mb-16">
      
      <div className="flex flex-wrap gap-4">
        {PortfolioData.video.map((video, index) => (
          <div key={index}>
            <PortfolioVideoItem key={video.id} video={video} />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 my-16">
        <Heading label="Портфолио" />
        <div className="flex flex-row gap-8 justify-center xl:justify-start">
          <button
            key="1"
            className={`border-1 border-(--white) px-4 py-2 fira-sans-condensed-light text-xl cursor-pointer ${
              button1 === "Фото"
                ? "bg-(--white) text-(--black)"
                : "bg-(--black) text-(--white)"
            }`}
            onClick={() => handleCityChange(button1)}
          >
            {button1}
          </button>
          <button
            key="2"
            className={`border-1 border-(--white) px-4 py-2 fira-sans-condensed-light text-xl cursor-pointer ${
              button1 === "Видео"
                ? "bg-(--white) text-(--black)"
                : "bg-(--black) text-(--white)"
            }`}
            onClick={() => handleCityChange(button2)}
          >
            {button2}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {PortfolioData.photo.map((photo) => (
          <div className="flex flex-col gap-4" key={photo.id}>
            <p className="text-(--white) text-center xl:text-start text-3xl sm:text-5xl fira-sans-condensed-light">
              {photo.date}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {photo.highQuality.map((image, index) => (
                <PortfolioItem
                  key={index}
                  photo={{
                    highQuality: image,
                    alt: `Photo taken on ${photo.date}`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
