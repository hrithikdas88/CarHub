"use client";

import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import "./Hero.scss";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero_container">
      <div className="hero_main">
        <h1 className="hero__title">
          Find,book, or rent a car --<br /> quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with <br /> our efforless booking
          process
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="button-style"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="hero__image-img" priority={true} />
        <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;