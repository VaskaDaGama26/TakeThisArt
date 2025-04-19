import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hidden, setHidden] = useState(false);

  const height = window.innerHeight;
  const thresholds = [
    { minHeight: 1280, multiplier: 0.8 },
    { minHeight: 760, multiplier: 0.6 },
    { minHeight: 640, multiplier: 0.4 },
  ];
  const matched =
    thresholds.find((t) => height > t.minHeight)?.multiplier * height || 0;

  const NavItems = [
    { id: 1, label: "Главная", link: "/" },
    { id: 2, label: "Портфолио", link: "/portfolio" },
    { id: 3, label: "Тарифы", link: "#plans" },
    { id: 4, label: "Контакты", link: "#contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > matched) {
        setHidden(true);
      }
      if (currentScroll <= matched) {
        setHidden(false);
      }

      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header
      className={`flex flex-row items-center justify-center gap-6 sm:gap-10 z-10 my-8 max-w-7xl mx-auto sticky top-8 duration-300 ${
        hidden ? "-translate-y-[calc(100%+2rem)]" : "translate-y-0"
      }`}
    >
      {NavItems.map((nav, index) => (
        <div
          key={index}
          className="text-(--white) fira-sans-condensed-light text-sm sm:text-xl duration-300 hover:translate-y-0.5 hover:text-(--gray)"
        >
          <a href={nav.link}>{nav.label}</a>
        </div>
      ))}
    </header>
  );
};

export default Header;
