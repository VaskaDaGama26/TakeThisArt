import React from "react";
import Heading from "./UI/Heading";

const Plans = () => {
  const plansItems = [
    {
      id: 1,
      title: "Фотосъёмка: длительность 1 час",
      price: "2500 RUB"
    },
    {
      id: 1,
      title: "Съёмка Reels: любые темы и мероприятия",
      price: "3000 RUB",
      alert: "* производится на смартфон",
    },
  ];

  return (
    <div className="flex flex-col text-center max-w-5xl mx-auto justify-center">
      <Heading label="Тарифы" />
      <div className="flex flex-col  mt-8">
        {plansItems.map((plan, index) => (
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p
                key={index}
                className="text-(--white) text-xl fira-sans-condensed-light"
              >
                {plan.title}
              </p>
              <span className="grow border-dotted border-b-2 mb-1.5 mx-1 border-(--gray) fira-sans-condensed-light"></span>
              <p className="text-(--white) text-xl fira-sans-condensed-light">
                {plan.price}
              </p>
            </div>
            {plan.alert && (
              <p
                key={index}
                className="text-(--gray) text-start fira-sans-condensed-light text-base"
              >
                {plan.alert}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
