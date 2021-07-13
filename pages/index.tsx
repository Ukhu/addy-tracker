import React, { useState } from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";

import { IHomeProps, IIPData } from "../types";
import { AddressInfoProvider } from "../context/AddressInfoContext";
import fetcher from "../utils/fetcher";

import SearchBar from "../components/SearchBar";

const MapWithNoSSR = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const requestIpAddress =
    (ctx.req.headers["x-forwarded-for"] as string) ||
    ctx.req.socket.remoteAddress ||
    "";

  const data = await fetcher(requestIpAddress);

  return {
    props: {
      initialData: data,
    },
  };
};

export default function Home({ initialData }: IHomeProps) {
  const [ipData, setIpData] = useState<IIPData>(initialData);

  const fetchAddressDetails = async (address: string) => {
    const data = await fetcher(address);
    setIpData(data);
  };

  return (
    <div>
      <AddressInfoProvider value={{ data: ipData }}>
        <SearchBar searchIp={fetchAddressDetails} />
        <MapWithNoSSR />
      </AddressInfoProvider>
    </div>
  );
}
