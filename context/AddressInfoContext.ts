import { createContext } from "react";
import { IIPData } from "../types";

const defaultData = {
  ip: "",
  location: {
    region: "",
    city: "",
    lat: 0,
    lng: 0,
    postalCode: "",
    timezone: "",
  },
  isp: "",
};

const AddressInfoContext = createContext<{ data: IIPData }>({
  data: defaultData,
});

export const AddressInfoProvider = AddressInfoContext.Provider;

export default AddressInfoContext;
