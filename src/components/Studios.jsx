import React, { useState } from "react";
import Heading from "./UI/Heading";
import data from "../StudiosData.json";

const Studios = () => {
  const cities = Object.keys(data);
  const [activeCity, setActiveCity] = useState(cities[0]);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };
  const handleCityChange = (city) => {
    setActiveCity(city);
    setLoadedImages({});
  };

  const renderButtons = () => {
    return cities.map((city, index) => (
      <button
        key={index}
        className={`border-1 border-(--white) px-4 py-2 fira-sans-condensed-light text-xl cursor-pointer ${
          activeCity === city
            ? "bg-(--white) text-(--black)"
            : "bg-(--black) text-(--white)"
        }`}
        onClick={() => handleCityChange(city)}
      >
        {city}
      </button>
    ));
  };

  const renderStudios = () => {
    const studios = data[activeCity];

    return (
      <ul className="flex gap-8 flex-col xl:flex-row">
        {studios.map((studio) => (
          <div
            key={studio.id}
            className="w-fit flex flex-col gap-6 items-start"
          >
            <div className="relative sm:w-[400px] w-[280px] sm:h-[267px] h-[187px]">
              {!loadedImages[studio.id] && (
                <div className="absolute inset-0 bg-neutral-900 animate-pulse"></div>
              )}
              <img
                className={`absolute sm:w-[400px] w-[280px] sm:h-[267px] h-[187px] object-cover ${
                  loadedImages[studio.id] ? "opacity-100" : "opacity-0"
                }`}
                src={studio.img}
                alt={studio.label}
                onLoad={() => handleImageLoad(studio.id)}
              />
            </div>
            <li>
              <a
                className="fira-sans-condensed-light text-xl underline text-(--white) cursor-pointer"
                target="_blank"
                href={studio.link}
              >
                {studio.label}
              </a>
            </li>
          </div>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Heading label="Студии для съёмок" />
        <p className="fira-sans-condensed-light text-center text-base/normal text-(--gray)">
          Не нашли подходящий вариант или вашего города нет в списке?
          <br /> Напишите мне — вместе подберем студию специально для вас!
        </p>
      </div>
      <div className="flex flex-col gap-8 xl:items-start items-center">
        <div className="flex flex-row items-center gap-8">
          {renderButtons()}
        </div>

        {renderStudios()}
      </div>
    </>
  );
};

export default Studios;
