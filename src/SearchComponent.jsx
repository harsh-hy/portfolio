import React, { useState } from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const executeSearch = () => {
    // Depending on the search query, you can scroll to a specific section.
    const query = searchQuery.toLowerCase();
    const scrollTargets = {
      home: "first-section",
      about: "about",
      projects: "project",
      project: "project",
      tensorflow:"about",
      contact: "footer",
    };

    if (scrollTargets[query]) {
      // Scroll to the respective section
      document.getElementById(scrollTargets[query]).scrollIntoView({ behavior: "smooth" });
    } else {
      alert("No matching section found. Try 'home', 'about', 'projects', or 'contact'.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 1,
        p: 0.5,
      }}
    >
      <InputBase
        placeholder="Search..."
        sx={{ color: "inherit", ml: 1 }}
        inputProps={{ "aria-label": "search" }}
        value={searchQuery}
        onChange={handleSearch}
      />
      <IconButton onClick={executeSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchComponent;
