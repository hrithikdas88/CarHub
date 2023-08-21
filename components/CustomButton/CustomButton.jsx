"use client";

import "./CustomButton.scss";
import Image from "next/image";

const CustomButton = ({ title, handleClick ,containerStyles }) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn  ${containerStyles}`}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
