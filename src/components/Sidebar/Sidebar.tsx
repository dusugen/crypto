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
  TextField,
  Typography,
} from "@mui/material";

interface ISidebarProps {
  sidebar: boolean;
  handleSidebar: (value: boolean) => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ sidebar, handleSidebar }) => {
  return (
    <Drawer
      anchor="right"
      open={sidebar}
      onClose={() => {
        handleSidebar(false);
      }}
    >
      <Typography variant="h4" textAlign="center">
        Filters
      </Typography>
      <List sx={{ width: "400px" }}>
        <ListItem>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            sx={{ mb: "10px" }}
          />
        </ListItem>
        <ListItem>
          <FormControl sx={{ m: 1, minWidth: 120, margin: 0 }}>
            <InputLabel id="currency">Currency</InputLabel>
            <Select
              labelId="currency"
              id="currency"
              value=""
              label="Currency"
              onChange={(event) => console.log(event.target.value)}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Population
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={"Ascending"}
              onChange={() => {}}
            >
              <FormControlLabel
                value="Ascending"
                label="Ascending"
                control={<Radio />}
              />
              <FormControlLabel
                value="Descending"
                label="Descending"
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default Sidebar;
