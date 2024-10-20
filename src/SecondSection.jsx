import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    ThemeProvider,
    createTheme,
    Avatar,
} from "@mui/material";

const darkGrayTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#424242", // Slightly dark gray background
        },
        text: {
            primary: "#ffffff", // White text for better contrast
        },
    },
});

const skills = [
    // Your skills array as before
    {
        name: "Python <br/>(Pandas, NumPy, <br />Scikit-learn)",
        level: "Proficient",
        image: "src/assets/python.webp",
    },
    {
        name: "TensorFlow",
        level: "Intermediate",
        image: "src/assets/Tensor-flow.png",
    },
    {
        name: "PyTorch",
        level: "Intermediate",
        image: "src/assets/pytorch.png",
    },
    {
        name: "Google Colab",
        level: "Proficient",
        image: "src/assets/google-colab.png",
    },
    {
        name: "Streamlit",
        level: "Proficient",
        image: "src/assets/streamlit.png",
    },
    {
        name: "Plotly",
        level: "Proficient",
        image: "src/assets/plotly.png",
    },
    {
        name: "Matplotlib",
        level: "Proficient",
        image: "src/assets/matplotlib.jpg",
    },
    {
        name: "Seaborn",
        level: "Proficient",
        image: "src/assets/seaborn.png",
    },
    {
        name: "Reinforcement Learning",
        level: "Intermediate",
        image: "src/assets/reinforcement-learning.png",
    },
    {
        name: "NLP (Natural Language Processing)",
        level: "Intermediate",
        image: "src/assets/nlp.png",
    }
];

const SecondSection = () => {
    return (
        <ThemeProvider theme={darkGrayTheme}>
            <Box
                id="about"
                sx={{
                    backgroundColor: "background.default",
                    color: "text.primary",
                    p: { xs: 3, md: 10 }, // Responsive padding
                    textAlign: "left",
                }}
            >
                <Typography variant="h4" sx={{ mb: 2 }}>
                    About Me
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: { xs: 16, md: 20 } }}>
                    I am a dedicated professional with a background in machine learning and data analysis. I have hands-on expertise working with web applications, model training, and data visualization tools, alongside a strong focus on environmental sustainability projects, including carbon footprint analysis and mining operations optimization.
                </Typography>

                <Typography variant="h5" sx={{ mb: 2 }}>
                    Skills
                </Typography>

                {/* Skill Cards */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: { xs: "center", md: "flex-start" }, // Responsive alignment
                        gap: 2,
                    }}
                >
                    {skills.map((skill) => (
                        <Box
                            key={skill.name}
                            sx={{
                                width: { xs: "100%", sm: "45%", md: "30%" }, // Responsive card size
                                maxWidth: "300px",
                                minHeight: "250px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Card
                                sx={{
                                    backgroundColor: "#616161",
                                    color: "#fff",
                                    height: "100%",
                                    borderRadius: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.05)", // Hover effect
                                    },
                                }}
                            >
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        p: { xs: 3, md: 4 },
                                    }}
                                >
                                    <Avatar
                                        src={skill.image}
                                        alt={skill.name}
                                        sx={{
                                            width: { xs: 70, md: 100 }, // Responsive avatar size
                                            height: { xs: 70, md: 100 },
                                            mb: 2,
                                        }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: { xs: "16px", md: "18px" },
                                            mb: 1,
                                            textAlign:"center",
                                        }}
                                        dangerouslySetInnerHTML={{ __html: skill.name }} 
                                    / >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: { xs: "14px", md: "16px" },
                                            mt: "auto",
                                        }}
                                    >
                                        {skill.level}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default SecondSection;
