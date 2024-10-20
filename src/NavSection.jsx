import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work"; // Icon representing portfolio
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll for smooth scrolling
import SearchComponent from "./SearchComponent"; // Import the SearchComponent

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const NavSection = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left Section: Logo */}
          <IconButton edge="start" color="inherit" aria-label="logo">
            <WorkIcon fontSize="large" />
          </IconButton>

          {/* Middle Section: Navigation Links */}
          <Box
            sx={{
              display: "flex",
              gap: 3, // Spacing between navigation items
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {/* Home button navigates to the home route */}
            <ScrollLink
              to="first-section" // ID of the target section
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70} // Offset to adjust for AppBar height
            >
              <Button color="inherit" sx={{ color: "white" }}>
                Home
              </Button>
            </ScrollLink>

            {/* Smooth scroll to SecondSection (About) */}
            <ScrollLink
              to="about" // ID of the target section
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70} // Offset to adjust for AppBar height
            >
              <Button color="inherit" sx={{ color: "white" }}>
                About
              </Button>
            </ScrollLink>

            {/* Smooth scroll to ThirdSection (Projects) */}
            <ScrollLink
              to="project"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
            >
              <Button color="inherit" sx={{ color: "white" }}>
                Projects
              </Button>
            </ScrollLink>

            {/* Smooth scroll to Footer (Contact) */}
            <ScrollLink
              to="footer"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
            >
              <Button color="inherit" sx={{ color: "white" }}>
                Contact
              </Button>
            </ScrollLink>
          </Box>

          {/* Right Section: Search Bar */}
          <SearchComponent /> {/* Use the SearchComponent here */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavSection;
