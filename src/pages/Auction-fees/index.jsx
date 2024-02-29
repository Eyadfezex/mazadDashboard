import React, { useState, useEffect, useReducer } from "react";
import instance from "../../api/Axios";
import Button from "../../components/button/Button.tsx";
import Label from "../../components/labels/Label.tsx";
import { Box, TextField, useTheme } from "@mui/material";
import Header from "../../components/header/Header.jsx";
import { tokens } from "../../theme";

const ActionTypes = {
  EDIT_DEPOSIT_MAZAD: "edit-deposit-mazad",
  EDIT_DEPOSIT_CAR_MAZAD: "edit-deposit-car-mazad",
};

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.EDIT_DEPOSIT_MAZAD:
      return { ...state, depostMazad: action.payload };
    case ActionTypes.EDIT_DEPOSIT_CAR_MAZAD:
      return { ...state, depositCarMazad: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

const AuctionFees = () => {
  const theme = useTheme();
  const initialState = { depostMazad: "", depositCarMazad: "" };
  const colors = tokens(theme.palette.mode);
  const fs = "20px";
  const fromWidth = "35ch";
  const [state, dispatch] = useReducer(reducer, initialState);
  const depositApi = "/control/deposit";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(depositApi);
        dispatch({
          type: ActionTypes.EDIT_DEPOSIT_MAZAD,
          payload: res.data.depostMazad,
        });
        dispatch({
          type: ActionTypes.EDIT_DEPOSIT_CAR_MAZAD,
          payload: res.data.depositCarMazad,
        });
      } catch (err) {
        console.log("An error occurred:", err.message);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case "depostMazad":
        dispatch({ type: ActionTypes.EDIT_DEPOSIT_MAZAD, payload: value });
        break;
      case "depositCarMazad":
        dispatch({ type: ActionTypes.EDIT_DEPOSIT_CAR_MAZAD, payload: value });
        break;
      default:
        break;
    }
  };

  const handleSave = async () => {
    try {
      await instance.put(depositApi, {
        depositMazad: state.depostMazad,
        depositCarMazad: state.depositCarMazad,
      });
    } catch (err) {
      console.log("An error occurred:", err.message);
    }
  };

  return (
    <Box>
      <Header title="Auction fees" />
      <Box
        sx={{
          position: "absolute",
          left: "25rem",
          top: "12rem",
          display: "flex",
          gap: "5rem",
          border: "solid 3px #007BFF",
          padding: "20px 30px 20px 30px",
          borderRadius: "10px",
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
          <Label label="رسوم مزاد السيارات" />
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={
              !state.depositCarMazad ? "loading..." : state.depositCarMazad
            }
            onChange={(e) => handleInputChange(e, "depositCarMazad")}
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
          <Label label="رسوم المزاد العادي" />
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={!state.depostMazad ? "loading..." : state.depostMazad}
            onChange={(e) => handleInputChange(e, "depostMazad")}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          top: "14rem",
          left: "32rem",
        }}
      >
        <Button label="Save" onClick={handleSave} />
      </Box>
    </Box>
  );
};

export default AuctionFees;
