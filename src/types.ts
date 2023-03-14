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

export interface ICoinTableData {
  CoinInfo: TCoinInfo;
  RAW: TCurrency;
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
