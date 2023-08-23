"use client";

import "./CustomButton.scss";
import Image from "next/image";

const CustomButton = ({ title, handleClick, containerStyles, btnType ,rightIcon }) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn  ${containerStyles}`}
      onClick={handleClick}
    >
      <span>{title}</span>
      {rightIcon && (
        <div>
          <Image
          src={rightIcon}
          alt="right-icon"
          width={30}
          height={30}
          className="right-icon"
          />
        </div>)}
    </button>
  );
};

export default CustomButton;
