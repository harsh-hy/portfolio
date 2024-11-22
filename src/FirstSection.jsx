import React, { useState } from "react";
import neil from "/src/assets/harsh.png"
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link as ScrollLink } from "react-scroll";

const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
});

const FirstSection = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("Machine learning and Data Science Engineer");
    const [editTitle, setEditTitle] = useState(title);

    const handleClickOpen = () => {
        setEditTitle(title);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setTitle(editTitle);
        setOpen(false);
    };

    return (
        <ThemeProvider theme={lightTheme}>
            <Box
                id="first-section"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80vh", // Set height to 60% of the viewport
                    backgroundColor: "#f5f5f5", // Slightly grayish background color
                    color: "text.primary",
                }}
            >
                {/* Left Section: Name, Title, and Contact Button */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        p: 12, // Reduced padding to fit in 60vh
                        height: "auto",
                        maxWidth: "80%",
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                        Harsh Yadav
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 1, fontWeight: "medium" }}>
                        {title}
                    </Typography>
                    <ScrollLink
                        to="footer"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-70}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                mt: 2,
                                borderColor: "black", // Dark outline for the button
                                color: "black",
                                "&:hover": {
                                    background: "black",
                                    color: "white",
                                },
                            }}
                        >
                        Contact Me
                        </Button>
                    </ScrollLink>
                </Box>

                {/* Right Section: Responsive Image */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <Avatar
                        sx={{
                            width: { xs: 120, sm: 160, md: 200, lg: 250 }, // Responsive width
                            height: { xs: 120, sm: 160, md: 200, lg: 250 }, // Auto height to maintain aspect ratio
                            maxWidth: "100%", // Ensures the image doesn't exceed its container
                        }}
                        alt="Harsh Yadav"
                        src={neil} // Use your image path
                    />
                    <IconButton
                        sx={{
                            position: "absolute",
                            right: 20,
                            bottom: 0,
                            color: "text.primary",
                        }}
                        onClick={handleClickOpen}
                    >
                        <EditIcon />
                    </IconButton>
                </Box>

                {/* Edit Dialog */}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Title</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Title"
                            fullWidth
                            variant="standard"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </ThemeProvider>
    );
};

export default FirstSection;
