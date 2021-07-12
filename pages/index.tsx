import dynamic from "next/dynamic";

import SearchBar from "../components/SearchBar";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/LeafletMap"), {
    ssr: false,
  });

  return (
    <div>
      <SearchBar />
      <MapWithNoSSR />
    </div>
  );
}
