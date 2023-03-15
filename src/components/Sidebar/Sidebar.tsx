import React from "react";
import Radio from "@mui/material/Radio";
import {
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { TFilters } from "../../types";

interface ISidebarProps {
  filters: TFilters;
  onFiltering: (value: Partial<TFilters>) => void;
  sidebar: boolean;
  handleSidebar: (value: boolean) => void;
}

const Sidebar: React.FC<ISidebarProps> = React.memo(
  ({ sidebar, handleSidebar, filters, onFiltering }) => {
    return (
      <Drawer
        anchor="right"
        open={sidebar}
        onClose={() => {
          handleSidebar(false);
        }}
      >
        <Typography variant="h4" textAlign="center">
          Options
        </Typography>
        <List sx={{ width: "400px" }}>
          <ListItem>
            <FormControl sx={{ m: 1, minWidth: 120, margin: 0 }}>
              <InputLabel id="currency">Currency</InputLabel>
              <Select
                labelId="currency"
                id="currency"
                value={filters.currency}
                label="Currency"
                onChange={(event) =>
                  onFiltering({ currency: event.target.value })
                }
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl>
              <FormLabel id="coinRating">Rating</FormLabel>
              <RadioGroup name="row-radio-buttons-group" value={filters.rating}>
                <FormControlLabel
                  value="desc"
                  label="Descending"
                  control={<Radio />}
                  onClick={() => onFiltering({ rating: "desc" })}
                />
                <FormControlLabel
                  value="asc"
                  label="Ascending"
                  control={<Radio />}
                  onClick={() => onFiltering({ rating: "asc" })}
                />
              </RadioGroup>
            </FormControl>
          </ListItem>
        </List>
      </Drawer>
    );
  }
);

export default Sidebar;
