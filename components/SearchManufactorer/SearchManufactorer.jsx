"use client";
import React, { useState } from "react";
import "./SearchManufactorer.scss";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
import Image from "next/image";

const SearchManufactorer = ({ manufactorer, setManufacturer }) => {
  const [Query, setQuery] = useState("");
  const filteredManufacturers =
    Query === ""
      ? []
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(Query.toLowerCase().replace(/\s+/g, ""))
        );
        
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative-full-width ">
          <Combobox.Button className="combobutton">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
            <Combobox.Input
              className="search-manufacturer__input"
              placeholder="Volkswagen..."
              onChange={(e) => setQuery(e.target.value)}
              displayValue={manufactorer}
            />
          </Combobox.Button>
          <Transition
            // as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                 {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufactorer;
