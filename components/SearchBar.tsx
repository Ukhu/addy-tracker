import Image from "next/image";

import ArrowIcon from "../assets/icons/icon-arrow.svg";
import SearchBarBg from "../assets/images/pattern-bg.png";

import AddressDetails from "./AddressDetails";

const SearchBar = () => {
  return (
    <section className="search-bar">
      <h1 className="search-bar__title">IP Address Tracker</h1>
      <div className="search-bar__input-group">
        <input
          className="search-bar__input"
          type="text"
          defaultValue="192.212.174.101"
        />
        <div className="search-bar__input-icon">
          <Image src={ArrowIcon} alt="Arrow SVG icon" />
        </div>
      </div>
      <AddressDetails />
    </section>
  );
};

export default SearchBar;
