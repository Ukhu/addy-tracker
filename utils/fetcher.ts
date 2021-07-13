const fetcher = (address: string) =>
  fetch(
    `https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_IPIFY_API_KEY}&domain=${address}`
  ).then((res) => res.json());

export default fetcher;
