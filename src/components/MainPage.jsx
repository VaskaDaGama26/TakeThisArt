import React from "react";
import Marquee from "react-fast-marquee";
import Button from "./UI/Button.jsx";
import Plans from "./Plans.jsx";
import { useNavigate } from "react-router-dom";
import Studios from "./Studios.jsx";

const MainPage = () => {
  const navigate = useNavigate();

  const portfolioButton = () => {
    navigate("/portfolio");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* First Screen */}
      <div className="h-[90vh] relative flex flex-col mx-auto items-center">
        <h1 className="text-(--white) absolute bottom-40 fira-sans-condensed-medium text-[64px] px-4 w-full text-start">
          Вадим Корнев
        </h1>
        <h2 className="text-(--white) absolute bottom-32 fira-sans-condensed-light text-5xl px-4 w-full text-start">
          Фотограф
        </h2>

        {/* Marquee */}
        <div className="text-(--white) absolute bottom-0 text-2xl fira-sans-condensed-light mx-auto max-w-lg">
          <Marquee autoFill="true">
            take\\this//art
            <span className="text-(--gray)">&nbsp;take\\this//art&nbsp;</span>
          </Marquee>
        </div>
      </div>
      {/* Main Works + Link to Portfolio */}
      <div className="flex flex-col gap-8 items-center pt-8">
        <p className="text-(--white) fira-sans-condensed-light text-2xl">
          ФОТОГРАФИЯ — СПОСОБ РАСКРЫТЬ ВАС ТАКИМИ, КАКИМИ ВЫ ЯВЛЯЕТЕСЬ НА САМОМ
          ДЕЛЕ
        </p>
        <div className="flex flex-row flex-wrap gap-8">
          <div className="w-[400px] h-[506px] bg-(--gray)"></div>
          <div className="w-[400px] h-[506px] bg-(--gray)"></div>
          <div className="w-[400px] h-[506px] bg-(--gray)"></div>
          <div className="w-[400px] h-[506px] bg-(--gray)"></div>
          <div className="w-[400px] h-[506px] bg-(--gray)"></div>
          <div className="w-[400px] h-[506px] bg-(--gray)"></div>
        </div>
        <Button label="Больше" action={portfolioButton} />
        {/* Plans */}
        <div className="py-32">
          <Plans />
        </div>

        <Studios />
      </div>
    </div>
  );
};

export default MainPage;
