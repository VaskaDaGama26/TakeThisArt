import React, {useState} from "react";
import Plans from "./Plans.jsx";
import Studios from "./Studios.jsx";
import Works from "./Works.jsx";

const MainPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* First Screen */}
      <div className="h-[calc(100vh-40px)] -mt-24 bg-center bg-cover relative flex flex-col mx-auto items-center">
        {/* Skeleton loader */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-900 animate-pulse"></div>
        )}

        {/* Background image */}
        <img
          src="/images/mainIMG.jpg"
          alt="Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        <h1 className="text-(--white) max-w-7xl ps-4 absolute bottom-24 fira-sans-condensed-medium text-5xl sm:text-6xl px-4 w-full text-start">
          Вадим Корнев
        </h1>
        <h2 className="text-(--white) max-w-7xl ps-4 absolute bottom-12 fira-sans-condensed-light text-3xl sm:text-5xl px-4 w-full text-start">
          Фотограф
        </h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center">
        <Works />
      </div>
      {/* Plans */}
      <div className="max-w-7xl mx-auto py-32 w-full ">
        <Plans />
      </div>
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 mb-16 px-4">
        <Studios />
      </div>
    </>
  );
};

export default MainPage;
