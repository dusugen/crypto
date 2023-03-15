import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import headerLogo from "../assets/images/header_logo.png";

interface IHeaderProps {
  sidebar: boolean;
  handleSidebar: (value: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({ handleSidebar, sidebar }) => {
  return (
    <AppBar
      sx={{
        flexGrow: 1,
        mb: "2.5rem",
        color: "primary",
      }}
      position="sticky"
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={headerLogo}
            style={{ width: "260px", height: "85px" }}
            alt="logo"
          />
        </Box>
        <Button color="inherit" onClick={() => handleSidebar(true)}>
          Options
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
