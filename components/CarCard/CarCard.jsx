"use client";

import { calculateCarRent } from "@/utils";
import CarDetails from "../CarDetails/CarDetails";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import "./CarCard.scss";
import { useState } from "react";

const CarCard = ({ car }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card">
      <div className="car-card__content">
        <h2 className="car-card__title">
          {make} {model}
        </h2>
      </div>
      <div className="car-card__rent">
        <span className="car-card__rent-price">${carRent}</span>
        <span className="per-day">/day</span>
      </div>
      <div className="car-card__image">
        <Image src="/hero.png" width={600} height={400} />
      </div>

      <div className="footer-card">
        <div className="footer-card-container">
          <div className="footer-card-content">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="mdksjf"
            />
            <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>

          <div className="footer-card-content">
            <Image src="/tire.svg" width={20} height={20} alt="mdksjf" />
            <p>{drive.toUpperCase()}</p>
          </div>

          <div className="footer-card-content">
            <Image src="/gas.svg" width={20} height={20} alt="mdksjf" />
            <p>{city_mpg} MPG </p>
          </div>
        </div>

        <div className="car-card-btn">
          <CustomButton
            title="View-more"
            containerStyles="car-card-btn-style"
            handleClick={() => setIsOpen(true)}
            rightIcon={"/right-arrow.svg"}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
