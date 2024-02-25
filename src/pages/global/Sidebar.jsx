import React from "react";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        backgroundColor: colors.primary[800],
        borderRadius: "10px",
        padding: "10px",
        margin: "0 20px .75rem 20px",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography textAlign="center" variant="h5" fontWeight="500">
        {title}
      </Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("احصائيات");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[700]} !important`,
          borderRadius: "15px",
          width: "15rem",
          height: "50rem",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },

        "& .pro-inner-item": {
          padding: "5px 30px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${colors.primary[100]} !important`,
        },
        "&.ps-menu-button:hover": {
          color: "none",
        },
        margin: ".5rem",
        height: "90%",
      }}
    >
      <ProSidebar>
        <Menu iconShape="square">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              m: "20px",
              backgroundColor: colors.primary[300],
              borderRadius: "8px",
              padding: "10px 20px",
              color: colors.primary[800],
            }}
          >
            لوحة التحكم
          </Typography>
          {/* MENU-ITEMS */}
          <Box>
            <Item
              title="احصائيات"
              to="/dashboard"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="معدل احتساب النقاط"
              to="/pointsCalc"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="رسوم المزاد"
              to="/AuctionFees"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="المدن والبلاد"
              to="/CitiesCountries"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="فئات السيارات"
              to="/form"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="فئات المزاد العادي"
              to="/calendar"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="الشروط والأحكام"
              to="/terms"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="سياسة الخصوصية"
              to="/privacy"
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
