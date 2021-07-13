import { useContext } from "react";

import AddressInfoContext from "../context/AddressInfoContext";

const AddressDetails = () => {
  const { data } = useContext(AddressInfoContext);
  const { location, isp, ip } = data;

  return (
    <div className="address-details">
      <div className="address-details__group">
        <div className="address-details__item">
          <h2 className="address-details__item-title">IP Address</h2>
          <p className="address-details__item-body">{ip ? ip : "--"}</p>
        </div>
        <div className="address-details__divider"></div>
        <div className="address-details__item">
          <h2 className="address-details__item-title">Location</h2>
          <p className="address-details__item-body">
            {location
              ? `${location.city}, ${location.region} ${location.postalCode}`
              : "--"}
          </p>
        </div>
        <div className="address-details__divider"></div>
        <div className="address-details__item">
          <h2 className="address-details__item-title">Timezone</h2>
          <p className="address-details__item-body">
            {location ? `UTC ${location.timezone}` : "--"}
          </p>
        </div>
        <div className="address-details__divider"></div>
        <div className="address-details__item">
          <h2 className="address-details__item-title">ISP</h2>
          <p className="address-details__item-body">{isp ? isp : "--"}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
