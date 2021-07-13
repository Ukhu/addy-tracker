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

const AddressInfoContext = createContext<{ data: IIPData; loading: boolean }>({
  data: defaultData,
  loading: false,
});

export const AddressInfoProvider = AddressInfoContext.Provider;

export default AddressInfoContext;
