import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { IPagination } from "../../../../types";

interface ISelectProps {
  limit: number;
  onPagination: (value: Partial<IPagination>) => void;
}

const SelectPerPage: React.FC<ISelectProps> = React.memo(
  ({ limit, onPagination }) => {
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="pageLimit">On page</InputLabel>
        <Select
          labelId="limit"
          id="limit"
          value={limit}
          label="On page"
          onChange={(event) =>
            onPagination({ page: 1, limit: Number(event.target.value) })
          }
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    );
  }
);

export default SelectPerPage;
