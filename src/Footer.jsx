import React from "react";
import { Box, Typography, IconButton, ThemeProvider, createTheme } from "@mui/material";
import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material"; // Replaced Facebook and Instagram
import TwitterIcon from "@mui/icons-material/Twitter"; // Import X (Twitter) icon

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Dark theme
    primary: {
      main: "#fff", // White text
    },
    background: {
      default: "#121212", // Dark background color
    },
  },
  typography: {
    body1: {
      fontSize: "0.9rem",
      color: "#bdbdbd", // Light gray text
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        id="footer"
        sx={{
          p: 8,
          backgroundColor: "background.default", // Dark background
          textAlign: "center", // Center the text
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Copyright Text */}
        <Typography variant="body1" sx={{ mb: 2 }}>
          © {new Date().getFullYear()} All rights reserved.
        </Typography>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            href="https://x.com/parkhe_neil"
            target="_blank"
            sx={{ color: "#1DA1F2" }} // X (Twitter)'s color
          >
            <TwitterIcon />
          </IconButton>

          <IconButton
            href="https://github.com/Neil-05"
            target="_blank"
            sx={{ color: "#333" }} // GitHub's color
          >
            <GitHub />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/neil-parkhe/"
            target="_blank"
            sx={{ color: "#0077b5" }} // LinkedIn's color
          >
            <LinkedIn />
          </IconButton>

          <IconButton
            href="mailto:neilparkhe@gmail.com" // Mailto link for email
            sx={{ color: "#D44638" }} // Email color
          >
            <Email />
          </IconButton>

          <IconButton
            href="tel:+91-9673622730" // Phone number link
            sx={{ color: "#4caf50" }} // Green color for phone
          >
            <Phone />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
