const AddressDetails = () => {
  return (
    <section className="address-details">
      <ul className="address-details__list">
        <li className="address-details__item">
          <h2 className="address-details__item-title">IP Address</h2>
          <p className="address-details__item-body">192.212.174.101</p>
        </li>
        <li className="address-details__item">
          <h2 className="address-details__item-title">Location</h2>
          <p className="address-details__item-body">Brooklyn, NY 10001</p>
        </li>
        <li className="address-details__item">
          <h2 className="address-details__item-title">Timezone</h2>
          <p className="address-details__item-body">UTC -05:00</p>
        </li>
        <li className="address-details__item">
          <h2 className="address-details__item-title">ISP</h2>
          <p className="address-details__item-body">SpaceX Starlink</p>
        </li>
      </ul>
    </section>
  );
};

export default AddressDetails;
