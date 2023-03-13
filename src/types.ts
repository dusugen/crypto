export type TCoinInfo = {
  Id: string;
  Name: string;
  FullName: string;
  ImageUrl: string;
};

export type TRaw = {
  USD: {
    PRICE: number;
    HIGH24HOUR: number;
    LOW24HOUR: number;
    VOLUME24HOURTO: number;
    CHANGE24HOUR: number;
  };
};

export interface ICoinTableData {
  CoinInfo: TCoinInfo;
  RAW: TRaw;
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
}

export interface IPagination {
  page: number;
  per_page: number;
  count: number;
}