export interface IIPData {
  ip: string;
  location: {
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
  };
  isp: string;
}

export interface IHomeProps {
  initialData: IIPData;
}

export interface ISearchBarProps {
  searchIp: (address: string) => void;
}
