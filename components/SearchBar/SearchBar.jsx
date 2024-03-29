"use client"

import SearchManufactorer from "../SearchManufactorer/SearchManufactorer";
import { useState } from "react";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");
    const handleSearch = () => {};
  return (
    <form className='searchbar' onSubmit={handleSearch}>
     <div className="searchbar__item">
      <SearchManufactorer
      manufacturer={manufacturer}
      setManufacturer={setManufacturer}
      />
     </div>
    </form>
  )
}

export default SearchBar