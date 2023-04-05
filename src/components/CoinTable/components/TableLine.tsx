import React from "react";
import { Avatar, Stack, TableCell, TableRow, Typography } from "@mui/material";
import config from "../../../config.json";
import { useNavigate } from "react-router-dom";

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

const TableLine: React.FC<ITAbleLineProps> = React.memo(
  ({ name, fullName, img, price, high24, low24, volume24, change24 }) => {
    const navigate = useNavigate();
    const handleRedirect = () => {
      navigate(`/${name}`);
    };

    return (
      <TableRow>
        <TableCell
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={handleRedirect}
        >
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
        <TableCell>{high24}</TableCell>
        <TableCell>{low24}</TableCell>
        <TableCell>{change24}</TableCell>
        <TableCell>{volume24}</TableCell>
      </TableRow>
    );
  }
);

export default TableLine;
