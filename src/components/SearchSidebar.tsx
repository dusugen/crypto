import React from 'react';
import {Drawer} from "@mui/material";

interface ISidebarProps {
  sidebar: boolean,
  handleSidebar: (value: boolean) => void
}

const SearchSidebar: React.FC<ISidebarProps> = ({sidebar, handleSidebar}) => {
  return (
    <Drawer anchor="right"
            open={sidebar}
            onClose={() => {
              handleSidebar(false)
            }}>
      THIS IS SIDEBAR WITH FILTERS
    </Drawer>
  );
};

export default SearchSidebar;