import React from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  Divider,
} from "@mui/material";

const darkGrayishTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f1c40f", // Yellow for milestone dots
    },
  },
  typography: {
    h6: {
      fontWeight: "bold",
    },
    body1: {
      color: "#555", // Dark gray for description text
    },
  },
});

// Sample projects array
const projects = [
    {
      title: "Cinemica",
      description: "A movie booking interface using HTML, CSS, and JavaScript.",
    },
    {
      title: "Inventory Management System using JSON",
      description: "Manages orders and sales and stores the record in a JSON file.",
    },
    {
      title: "GDP Analysis",
      description: "Analyzes GDP data of various countries over a specified period, providing insights into economic growth, trends, and factors influencing GDP changes.",
    }
  ];
   

const ThirdSection = () => {
  return (
    <ThemeProvider theme={darkGrayishTheme}>
      <Box
       id = "project"
        sx={{
          p: 4,
          backgroundColor: "#f5f5f5", // Light gray background
          color: "text.primary",
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center", // Centers content horizontally
          alignItems: "center", // Centers content vertically if needed
        }}
      >
        <Box
        >
          <Typography variant="h4" sx={{ mb: 4 }}>
            Projects
          </Typography>

          {/* Timeline Format */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: { xs: 2, sm: 4, md: 6 }}}>
            {projects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 6,
                  position: "relative",
                  width: "100%",
                }}
              >
                {/* Left-side Divider and Circle */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "5%" }}>
                  {/* Yellow Circle for Milestone */}
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#f1c40f",
                      mb: 1,
                    }}
                  />

                  {/* Dotted Line */}
                  {index < projects.length - 1 && (
                    <Divider
                      orientation="vertical"
                      sx={{
                        height: "90px",
                        borderLeft: "2px dotted #f1c40f",
                      }}
                    />
                  )}
                </Box>

                {/* Project Info to the right of the line */}
                <Box sx={{ pl: 4, width: "90%" }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1">{project.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ThirdSection;
