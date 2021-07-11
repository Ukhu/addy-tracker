import Image from "next/image";

import ArrowIcon from "../assets/icons/icon-arrow.svg";

const SearchBar = () => {
  return (
    <section className="search-bar">
      <h1 className="search-bar__title">IP Address Tracker</h1>
      <div className="search-bar__input-group">
        <input className="search-bar__input" type="text" />
        <div className="search-bar__input-icon">
          <Image src={ArrowIcon} alt="Arrow SVG icon" />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
