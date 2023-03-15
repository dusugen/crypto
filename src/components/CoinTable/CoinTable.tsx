import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableLine from "./components/TableLine";
import { ICoinTableData, ICoinTableProps } from "../../types";
import FormPagination from "./components/TableFooter/FormPagination";
import SelectPerPage from "./components/TableFooter/SelectPerPage";

const CoinTable: React.FC<ICoinTableProps> = React.memo(
  ({ data, pagination, onPagination }) => {
    const tableRows = data?.Data.map((item: ICoinTableData) => {
      const high24 =
        item.DISPLAY?.USD?.HIGH24HOUR ||
        item.DISPLAY?.EUR?.HIGH24HOUR ||
        item.DISPLAY?.GBP?.HIGH24HOUR ||
        0;

      const low24 =
        item.DISPLAY?.USD?.LOW24HOUR ||
        item.DISPLAY?.EUR?.LOW24HOUR ||
        item.DISPLAY?.GBP?.LOW24HOUR ||
        0;

      const volume24 =
        item.DISPLAY?.USD?.VOLUME24HOURTO ||
        item.DISPLAY?.EUR?.VOLUME24HOURTO ||
        item.DISPLAY?.GBP?.VOLUME24HOURTO ||
        0;

      const change24 =
        item.DISPLAY?.USD?.CHANGE24HOUR ||
        item.DISPLAY?.EUR?.CHANGE24HOUR ||
        item.DISPLAY?.GBP?.CHANGE24HOUR ||
        0;

      const price =
        item.DISPLAY?.USD?.PRICE ||
        item.DISPLAY?.EUR?.PRICE ||
        item.DISPLAY?.GBP?.PRICE ||
        0;
      return (
        <TableLine
          key={item.CoinInfo.Id}
          name={item.CoinInfo.Name}
          fullName={item.CoinInfo.FullName}
          img={item.CoinInfo.ImageUrl}
          price={price}
          high24={high24}
          low24={low24}
          volume24={volume24}
          change24={change24}
        />
      );
    });
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, mb: "20px" }} aria-label="simple table">
          <TableHead>
            <TableRow color="primary">
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>High day</TableCell>
              <TableCell>Low day</TableCell>
              <TableCell>Change day</TableCell>
              <TableCell>Volume day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
        <Box sx={{ display: "flex", mb: "10px" }}>
          <FormPagination pagination={pagination} onPagination={onPagination} />
          <SelectPerPage limit={pagination.limit} onPagination={onPagination} />
        </Box>
      </TableContainer>
    );
  }
);
export default CoinTable;
