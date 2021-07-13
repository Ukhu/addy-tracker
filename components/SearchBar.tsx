import { useContext, useState } from "react";
import Image from "next/image";

import ArrowIcon from "../assets/icons/icon-arrow.svg";
import { ISearchBarProps } from "../types";

import AddressDetails from "./AddressDetails";
import AddressInfoContext from "../context/AddressInfoContext";

const SearchBar = ({ searchIp }: ISearchBarProps) => {
  const { loading } = useContext(AddressInfoContext);

  const [ipAddress, setIpAddress] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setIpAddress(value);
  };

  return (
    <section className="search-bar">
      <h1 className="search-bar__title">IP Address Tracker</h1>
      <div className="search-bar__input-group">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={handleChange}
        />
        <div
          className="search-bar__input-icon"
          onClick={() => searchIp(ipAddress)}
        >
          <Image
            src={ArrowIcon}
            alt="Arrow SVG icon"
            className={loading ? "animate" : ""}
          />
        </div>
      </div>
      <AddressDetails />
    </section>
  );
};

export default SearchBar;
