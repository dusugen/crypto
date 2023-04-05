import React from "react";
import { TableCell, TableRow } from "@mui/material";

interface ISingleCoinTableRowProps {
  open: string | undefined;
  high: string | undefined;
  low: string | undefined;
  volume: string | undefined;
  change: string | undefined;
}
const CoinDataRowValue: React.FC<ISingleCoinTableRowProps> = ({
  open,
  high,
  low,
  volume,
  change,
}) => {
  return (
    <TableRow>
      <TableCell>{open}</TableCell>
      <TableCell>{high}</TableCell>
      <TableCell>{low}</TableCell>
      <TableCell>{change}</TableCell>
      <TableCell>{volume}</TableCell>
    </TableRow>
  );
};

export default CoinDataRowValue;
