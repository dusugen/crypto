import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import headerLogo from "../../assets/images/header_logo.svg";
import { Link } from "react-router-dom";
import { IPagination } from "../../types";

interface IHeaderProps {
  sidebar: boolean;
  handleSidebar: (value: boolean) => void;
  resetPagination: (value: Partial<IPagination>) => void;
}

const Header: React.FC<IHeaderProps> = ({ handleSidebar, resetPagination }) => {
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
          <Link to="/" onClick={() => resetPagination({ page: 1 })}>
            <img
              src={headerLogo}
              style={{ width: "260px", height: "85px" }}
              alt="Crypto"
            />
          </Link>
        </Box>
        <Button
          color="inherit"
          sx={{ display: "flex", alignItems: "start" }}
          onClick={() => handleSidebar(true)}
        >
          Options
          <MenuIcon sx={{ ml: "10px" }} />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
