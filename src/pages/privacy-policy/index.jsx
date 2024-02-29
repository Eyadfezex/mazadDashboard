import React, { useReducer, useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import Header from "../../components/header/Header.jsx";
import Button from "../../components/button/Button.tsx";
import instance from "../../api/Axios.js";

// Define action types
const ActionTypes = {
  EDIT_TEXT: "edit-text",
};

const privacyApi = "/control/privacy";

// Reducer function to manage state
function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.EDIT_TEXT:
      return { ...state, text: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

const Privacy = () => {
  // Define initial state
  const initialState = { text: "" };

  const handleSave = async () => {
    try {
      const res = await instance.put(privacyApi, {
        privacy: state.text,
      });
    } catch (err) {
      // Error handling
      console.log("An error occurred:", err.message);
    }
  };

  // Initialize state using useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handle input change
  const handleInputChange = (e) => {
    dispatch({ type: ActionTypes.EDIT_TEXT, payload: e.target.value });
  };

  const [terms, setTerms] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(privacyApi);
        setTerms(res.data.terms); // Set the data in the state
        dispatch({ type: ActionTypes.EDIT_TEXT, payload: res.data.data }); // Set the text in the reducer
      } catch (err) {
        // Error handling
        console.log("An error occurred:", err.message);
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array to run the effect only once

  return (
    <Box sx={{ width: "50%", marginRight: "3%" }}>
      <Header title="privacy policy" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={20}
          value={!state.text ? "loading..." : state.text} // Access state.text.text here
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />
        <Button label="Save" onClick={handleSave} />
      </Box>
    </Box>
  );
};

export default Privacy;
