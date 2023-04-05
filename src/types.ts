export type TCoinInfo = {
  Id: string;
  Name: string;
  FullName: string;
  ImageUrl: string;
};

export type TCurrencyData = {
  PRICE: number;
  HIGH24HOUR: number;
  LOW24HOUR: number;
  VOLUME24HOURTO: number;
  CHANGE24HOUR: number;
};

export type TCurrency = {
  USD?: TCurrencyData;
  EUR?: TCurrencyData;
  GBP?: TCurrencyData;
};

export type TCurrencySingleCoin = {
  USD: TCurrencySingleCoinValue;
  EUR: TCurrencySingleCoinValue;
  GBP: TCurrencySingleCoinValue;
};

export type TCurrencySingleCoinValue = {
  IMAGEURL: string;
  PRICE: string;
  OPENDAY?: string;
  OPENHOUR?: string;
  OPEN24HOUR?: string;
  HIGHDAY?: string;
  HIGHHOUR?: string;
  HIGH24HOUR?: string;
  LOWDAY?: string;
  LOWHOUR?: string;
  LOW24HOUR?: string;
  VOLUMEDAYTO?: string;
  VOLUMEHOURTO?: string;
  VOLUME24HOURTO?: string;
  CHANGEDAY?: string;
  CHANGEHOUR?: string;
  CHANGE24HOUR?: string;
};

export interface ICoinTableData {
  CoinInfo: TCoinInfo;
  DISPLAY: TCurrency | undefined;
}

export type TMetaData = {
  Count: number;
};

export interface IDataProps {
  Data: ICoinTableData[];
  Message: string;
  MetaData: TMetaData;
}

export interface ICoinTableProps {
  data: IDataProps;
  isLoading: boolean;
  pagination: IPagination;
  onPagination: (value: Partial<IPagination>) => void;
}

export interface IPagination {
  page: number;
  limit: number;
  count: number;
}

export type TFilters = {
  currency: string;
  rating: "asc" | "desc";
};
export type TDisplay = Record<string, TCurrencySingleCoin>;

export interface ICoinData {
  DISPLAY: TDisplay;
}
