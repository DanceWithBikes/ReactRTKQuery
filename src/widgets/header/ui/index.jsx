import React from "react";
import { AppBar, Tabs, Tab, Toolbar, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { routes } from "@app/navigation/config";

const tabPaths = routes.map((o) => o.path);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = tabPaths.indexOf(location.pathname);

  const handleChange = (event, newValue) => {
    navigate(tabPaths[newValue]);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        <Tab label="Home" />
        <Tab label="Repositories" />
      </Tabs>
    </Box>
  );
};

export default Header;
