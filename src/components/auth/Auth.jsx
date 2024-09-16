import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import { BASE_URL } from "../../api";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/users");
      }
    } catch (error) {
      setError("try again!");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper style={{ padding: 30, width: "300px" }}>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <Box mt={2}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
        </Box>
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Auth;
