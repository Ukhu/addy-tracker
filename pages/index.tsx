import React, { useState } from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";

import { IHomeProps, IIPData } from "../types";
import { AddressInfoProvider } from "../context/AddressInfoContext";
import fetcher from "../utils/fetcher";

import SearchBar from "../components/SearchBar";
import { toast, ToastContainer } from "react-toastify";

const MapWithNoSSR = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetcher();

  return {
    props: {
      initialData: data,
    },
  };
};

export default function Home({ initialData }: IHomeProps) {
  const [ipData, setIpData] = useState<IIPData>(initialData);
  const [loading, setLoading] = useState(false);

  const fetchAddressDetails = async (address: string) => {
    setLoading(true);

    const data = await fetcher(address);

    if (data.ip) {
      setIpData(data);
      setLoading(false);
    } else {
      const errorMsg = "Unable to process your request";
      setIpData(initialData);
      setLoading(false);
      toast.error(data.messages || errorMsg);
    }
  };

  return (
    <div>
      <AddressInfoProvider value={{ data: ipData, loading }}>
        <SearchBar searchIp={fetchAddressDetails} />
        <MapWithNoSSR />
      </AddressInfoProvider>
      <ToastContainer position="bottom-left" />
    </div>
  );
}
