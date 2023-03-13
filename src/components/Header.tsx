import React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";

interface IHeaderProps {
  handleSidebar: (value: boolean) => void,
}

const Header: React.FC<IHeaderProps> = ({handleSidebar}) => {
  return (
    <Box sx={{flexGrow: 1, mb: "3rem"}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="h1" sx={{flexGrow: 1}}>
            CRYPTOCURRENCY
          </Typography>
          <Button color="inherit" onClick={() => handleSidebar(true)}>Search</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Header.propTypes = {};

export default Header;