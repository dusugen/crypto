import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import logo24h from "../../../../../../../assets/images/24h_logo.png";
import logoToday from "../../../../../../../assets/images/logo_today.png";
import logoHour from "../../../../../../../assets/images/1hours_logo.png";

interface ICoinDataTableProps {
  title: string;
  open: string | undefined;
  low: string | undefined;
  high: string | undefined;
  change: string | undefined;
  volume: string | undefined;
}

const CoinDataTable: React.FC<ICoinDataTableProps> = ({
  title,
  open,
  low,
  high,
  change,
  volume,
}) => {
  return (
    <Card sx={{ minWidth: 275, flex: "0 1 31%" }}>
      <CardContent>
        <CardMedia
          sx={{ height: 140, width: "200", backgroundSize: "contain" }}
          image={
            title === "24 Hours"
              ? logo24h
              : title === "Today"
              ? logoToday
              : logoHour
          }
          title="green iguana"
        />
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography>open{open}</Typography>
        <Typography>low {open}</Typography>
        <Typography>high {high}</Typography>
        <Typography>change {change}</Typography>
        <Typography>volume {volume}</Typography>
      </CardContent>
    </Card>
    // <TableContainer component={Paper} sx={{ mb: "15px" }}>
    //   <Table sx={{ minWidth: 650, mb: "20px" }} aria-label="simple table">
    //     <TableHead>
    //       <Typography
    //         sx={{ padding: "10px 0 0 10px" }}
    //         variant="h6"
    //         component="div"
    //       >
    //         {props.title}
    //       </Typography>
    //
    //       <TableRow color="primary">
    //         <TableCell>Open</TableCell>
    //         <TableCell>High</TableCell>
    //         <TableCell>Low</TableCell>
    //         <TableCell>Change</TableCell>
    //         <TableCell>Volume</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       <CoinDataRowValue {...props} />
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};

export default CoinDataTable;
