import React from "react";
import Label from "../../components/labels/Label.tsx";
import TextField from "@mui/material/TextField";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/header/Header.jsx";
import { tokens } from "../../theme";

const PointsCalc = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const fs = "20px";
  const fromWidth = "35ch";
  return (
    <Box>
      <Header title="Points calculation rate" />
      <Box
        sx={{
          position: "absolute",
          left: "25rem",
          top: "12rem",
          display: "flex",
          gap: "5rem",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Label label="لكل  بالريال" />

          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            sx={{ width: fromWidth }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Label label="معدل احتساب النقاط" />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            sx={{ width: fromWidth }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PointsCalc;
