import React, { useCallback, useState } from "react";
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
import { ICoinTableData, ICoinTableProps, IPagination } from "../../types";
import FormPagination from "./components/TableFooter/FormPagination";
import SelectPerPage from "./components/TableFooter/SelectPerPage";

const CoinTable: React.FC<ICoinTableProps> = ({
  data,
  pagination,
  onPagination,
}) => {
  const tableRows = data?.Data.map((item: ICoinTableData) => (
    <TableLine
      key={item.CoinInfo.Id}
      name={item.CoinInfo.Name}
      fullName={item.CoinInfo.FullName}
      img={item.CoinInfo.ImageUrl}
      price={item.RAW.USD.PRICE}
      high24={item.RAW.USD.HIGH24HOUR}
      low24={item.RAW.USD.LOW24HOUR}
      volume24={item.RAW.USD.VOLUME24HOURTO}
      change24={item.RAW.USD.CHANGE24HOUR}
    />
  ));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, mb: "20px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
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
};

export default CoinTable;
