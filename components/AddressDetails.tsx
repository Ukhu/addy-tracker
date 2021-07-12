const AddressDetails = () => {
  return (
    <div className="address-details">
      <div className="address-details__group">
        <div className="address-details__item">
          <h2 className="address-details__item-title">IP Address</h2>
          <p className="address-details__item-body">192.212.174.101</p>
        </div>
        <div className="address-details__divider"></div>
        <div className="address-details__item">
          <h2 className="address-details__item-title">Location</h2>
          <p className="address-details__item-body">Brooklyn, NY 10001</p>
        </div>
        <div className="address-details__divider"></div>
        <div className="address-details__item">
          <h2 className="address-details__item-title">Timezone</h2>
          <p className="address-details__item-body">UTC -05:00</p>
        </div>
        <div className="address-details__divider"></div>
        <div className="address-details__item">
          <h2 className="address-details__item-title">ISP</h2>
          <p className="address-details__item-body">SpaceX Starlink</p>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
