import React from "react";

const Header = () => {
  const NavItems = [
    { id: 1, label: "Главная", link: "" },
    { id: 2, label: "Портфолио", link: "" },
    { id: 3, label: "Тарифы", link: "" },
    { id: 4, label: "Контакты", link: "" },
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-10 mt-8 max-w-7xl mx-auto">
      {NavItems.map((nav, index) => (
        <div
          key={index}
          className="text-(--white) fira-sans-condensed-light text-xl duration-300 hover:translate-y-0.5 hover:text-(--gray)"
        >
          <a href={nav.link}>{nav.label}</a>
        </div>
      ))}
      {/* {NavItems.map((nav, index) => (
        <div
          key={index}
          className="text-(--gray) fira-sans-condensed-light text-xl duration-300 hover:-translate-y-0.5 hover:text-(--white)"
        >
          <a href={nav.link}>{nav.label}</a>
        </div>
      ))} */}
    </div>
  );
};

export default Header;
