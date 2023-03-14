import React from "react";
import { Avatar, Stack, TableCell, TableRow, Typography } from "@mui/material";
import config from "../../../config.json";

interface ITAbleLineProps {
  name: string;
  fullName: string;
  img: string;
  price: number;
  high24: number;
  low24: number;
  volume24: number;
  change24: number;
}

const TableLine: React.FC<ITAbleLineProps> = ({
  name,
  fullName,
  img,
  price,
  high24,
  low24,
  volume24,
  change24,
}) => {
  return (
    <TableRow>
      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src={`${config.imgUrl}${img}`}
          alt={`${name}`}
          sx={{ height: "50px", width: "50px", mr: "10px" }}
        />
        <Stack direction="column">
          <Typography variant="h6">{fullName}</Typography>
          <Typography variant="body2">{name}</Typography>
        </Stack>
      </TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{high24.toFixed(3)}</TableCell>
      <TableCell>{low24.toFixed(3)}</TableCell>
      <TableCell>{change24.toFixed(4)}</TableCell>
      <TableCell>{volume24.toFixed(4)}</TableCell>
    </TableRow>
  );
};

export default TableLine;
