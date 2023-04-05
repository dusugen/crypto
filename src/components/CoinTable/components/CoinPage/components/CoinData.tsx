import React from "react";
import { ICoinData, TCurrencySingleCoin } from "../../../../../types";
import config from "../../../../../config.json";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CoinDataRowValue from "./components/CoinDataTable/components/CoinDataRowValue/CoinDataRowValue";
import CoinDataTable from "./components/CoinDataTable/CoinDataTable";

interface ICoinDataProps {
  data: ICoinData;
  coinName: string;
}

const CoinData: React.FC<ICoinDataProps> = ({ data, coinName }) => {
  const displayData: TCurrencySingleCoin = data.DISPLAY[coinName];

  console.log(displayData);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">{coinName}</Typography>
      <Typography variant="h4">{displayData.USD.PRICE}</Typography>
      <img
        style={{ width: "100px", height: "100px" }}
        src={config.imgUrl + displayData?.USD?.IMAGEURL}
        alt="coinLogo"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <CoinDataTable
          title={"24 Hours"}
          open={displayData.USD.OPEN24HOUR}
          low={displayData.USD.LOW24HOUR}
          high={displayData.USD.HIGH24HOUR}
          change={displayData.USD.CHANGE24HOUR}
          volume={displayData.USD.VOLUME24HOURTO}
        />
        <CoinDataTable
          title={"Today"}
          open={displayData.USD.OPENDAY}
          low={displayData.USD.LOWDAY}
          high={displayData.USD.HIGHDAY}
          change={displayData.USD.CHANGEDAY}
          volume={displayData.USD.VOLUMEDAYTO}
        />
        <CoinDataTable
          title={"Hour"}
          open={displayData.USD.OPENHOUR}
          low={displayData.USD.LOWHOUR}
          high={displayData.USD.HIGHHOUR}
          change={displayData.USD.CHANGEHOUR}
          volume={displayData.USD.VOLUMEHOURTO}
        />
      </div>
    </div>
  );
};

export default CoinData;
