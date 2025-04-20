import React from "react";

const Button = ({ label, action }) => {
  return (
    <button
      className="border-1 border-(--white) px-4 py-2 fira-sans-condensed-light uppercase text-(--white) text-xl duration-700 cursor-pointer hover:bg-(--white) hover:text-(--black)"
      onClick={action}
    >
      {label}
    </button>
  );
};

export default Button;


