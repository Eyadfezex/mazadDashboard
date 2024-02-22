import { useState, useRef, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import instance from "../../api/Axios";
import { useNavigate } from "react-router-dom";
// API endpoint for login
const LOGIN_URL = "/auth/login";

const Login = () => {
  // State variables for managing form input and error messages
  const [email, setEmail] = useState("");
  const [PWD, setPWD] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  // Refs for accessing DOM elements
  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await instance.post(
        LOGIN_URL,
        {
          email,
          password: PWD,
          admin: true,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Resetting form fields and updating authentication context
      setEmail("");
      setPWD("");
      navigate("/dashboard");
    } catch (err) {
      // Handling different error scenarios

      if (err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        // Handle 400 Bad RequestsetERR
        setErrMsg("Unauthorized"); // More specific message
      } else if (err.response?.status === 401) {
        setErrMsg("Invalid email or password"); // More specific message
      }

      // Focus on the error reference if it's available
      if (errRef?.current) {
        errRef.current.focus();
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        {/* Displaying error message */}
        <p
          style={{ color: "red" }}
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        ></p>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          {/* Input fields for email and password */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            ref={userRef}
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            helperText={errMsg}
            name="password"
            placeholder="Password"
            value={PWD}
            onChange={(e) => setPWD(e.target.value)}
            type="password"
            id="password"
          />

          {/* Submit button */}
          <Button
            type="submit"
            fullWidth
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
