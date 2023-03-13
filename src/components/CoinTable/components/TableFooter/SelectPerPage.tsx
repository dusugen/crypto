import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SelectPerPage = () => {
  return (
    <FormControl sx={{m: 1, minWidth: 120}} size="small">
      <InputLabel id="demo-select-small">On page</InputLabel>
      <Select
        labelId="per_page"
        id="per_page"
        value={10}
        label="On page"
        onChange={() => {
        }}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectPerPage;