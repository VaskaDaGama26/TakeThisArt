import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = ({ isLoading }) => {
  return (
    <div
      className={`fixed flex top-0 left-0 w-full h-full bg-black justify-center items-center z-50 ${
        isLoading ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-500 ease-in-out`}
    >
      <CircularProgress style={{ color: "#fff" }} />
    </div>
  );
};

export default Loader;
