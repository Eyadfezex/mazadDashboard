import React, { useEffect, useState } from "react";
import Label from "../../components/labels/Label.tsx";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/header/Header.jsx";
import { tokens } from "../../theme";
import instance from "../../api/Axios";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const fs = "20px";
  const stat = "control/stat";
  const [statData, setStatData] = useState(null); // State to store the data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(stat);
        setStatData(res.data); // Set the data in the state
      } catch (err) {
        // Error handling
        console.log("An error occurred:", err.message);
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array to run the effect only once

  return (
    <Box>
      <Header title="statistics" />
      <Box
        sx={{
          position: "absolute",
          left: "25rem",
          top: "12rem",
          flexWrap: "wrap",
          display: "flex",
          gap: "9rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Label label="عدد المزادات النشطة" />
          <Typography
            padding="10px 60px"
            sx={{
              background: colors.primary[700],
              borderRadius: "8px",
              fontSize: fs,
            }}
          >
            {!statData ? "...loading" : statData.running}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Label label="عدد المزادات المنتهية " />
          <Typography
            padding="10px 60px"
            sx={{
              background: colors.primary[700],
              borderRadius: "8px",
              fontSize: fs,
            }}
          >
            {!statData ? "...loading" : statData.finshed}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Label label="عدد المزادات الكلي" />
          <Typography
            padding="10px 60px"
            sx={{
              background: colors.primary[700],
              borderRadius: "8px",
              fontSize: fs,
            }}
          >
            {!statData ? "...loading" : statData.all}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Label label="عدد المستخدمين" />
          <Typography
            padding="10px 60px"
            sx={{
              background: colors.primary[700],
              borderRadius: "8px",
              fontSize: fs,
            }}
          >
            {!statData ? "...loading" : statData.users}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
