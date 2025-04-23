import React, { useState } from "react";
import PortfolioData from "../PortfolioData.json";
import PortfolioItem from "./portfolio/PortfolioPhotoItem";
import PortfolioVideoItem from "./portfolio/PortfolioVideoItem";
import Heading from "./UI/Heading";

const Portfolio = () => {
  const categories = Object.keys(PortfolioData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setLoadedImages({});
  };

  const renderButtons = () => {
    return categories.map((category, index) => (
      <button
        key={index}
        className={`border-1 border-(--white) px-4 py-2 fira-sans-condensed-light text-xl cursor-pointer ${
          activeCategory === category
            ? "bg-(--white) text-(--black)"
            : "bg-(--black) text-(--white)"
        }`}
        onClick={() => handleCategoryChange(category)}
      >
        {category}
      </button>
    ));
  };

  const renderContent = () => {
    if (activeCategory === "Фото") {
      return PortfolioData["Фото"].map((photo) => (
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
      ));
    }

    if (activeCategory === "Видео") {
      return PortfolioData["Видео"].map((video) => (
        <div key={video.id}>
          <PortfolioVideoItem
            video={{
              src: video.src,
              type: video.type,
              alt: `Video from ID ${video.id}`,
            }}
          />
        </div>
      ));
    }
    return null; // Default case if no category matches
  };

  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto px-2 mb-16">
      <div className="flex flex-col gap-8 mt-8 mb-16">
        <Heading label="Портфолио" />
        <div className="flex flex-row gap-8 justify-center xl:justify-start">
          {renderButtons()}
        </div>
      </div>

      <div
        className={`${
          activeCategory === "Фото"
            ? "flex flex-col gap-8"
            : "flex flex-wrap flex-row justify-center gap-8"
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Portfolio;
