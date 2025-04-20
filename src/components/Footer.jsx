import React from "react";

const Footer = () => {
  const actualYear = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-2 pt-32 pb-8 max-w-7xl mx-auto text-center">
      <p className="fira-sans-condensed-light text-base sm:text-xl text-(--white)">
        &copy; 2024 - {actualYear} Vadim Kornev | photographer, Russia
      </p>
      <p className="fira-sans-condensed-light text-base text-(--gray)">
        Site designed and developed by&nbsp;
        <a
          href="https://t.me/vaskadagamaa26"
          target="_blank"
          className="hover:text-(--green) underline-animation"
        >
          Vasiliy Kirichenko
        </a>
      </p>
    </div>
  );
};

export default Footer;
