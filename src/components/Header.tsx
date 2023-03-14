import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

interface IHeaderProps {
  handleSidebar: (value: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({ handleSidebar }) => {
  return (
    <AppBar
      sx={{ flexGrow: 1, mb: "2.5rem", color: "primary" }}
      position="sticky"
    >
      <Toolbar>
        <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
          CRYPTOCURRENCY
        </Typography>
        <Button color="inherit" onClick={() => handleSidebar(true)}>
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
