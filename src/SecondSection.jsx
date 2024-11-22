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
import pythonImg from "/src/assets/python.webp";
import tensorflowImg from "/src/assets/Tensor-flow.png";
import pytorchImg from "/src/assets/pytorch.png";
import colabImg from "/src/assets/google-colab.png";
import streamlitImg from "/src/assets/streamlit.png";
import plotlyImg from "/src/assets/plotly.png";
import matplotlibImg from "/src/assets/matplotlib.jpg";
import seabornImg from "/src/assets/seaborn.png";
import rlImg from "/src/assets/reinforcement-learning.png";
import nlpImg from "/src/assets/nlp.png";


// Theme for the dark gray background and white text
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

// Skills array with updated image imports for better asset handling
const skills = [
    {
        name: "Python <br/>(Pandas, NumPy, <br />Scikit-learn)",
        level: "Proficient",
        image: pythonImg,
    },
    {
        name: "TensorFlow",
        level: "Intermediate",
        image: tensorflowImg,
    },
    {
        name: "PyTorch",
        level: "Intermediate",
        image: pytorchImg,
    },
    {
        name: "Google Colab",
        level: "Proficient",
        image: colabImg,
    },
    {
        name: "Streamlit",
        level: "Proficient",
        image: streamlitImg,
    },
    {
        name: "Plotly",
        level: "Proficient",
        image: plotlyImg,
    },
    {
        name: "Matplotlib",
        level: "Proficient",
        image: matplotlibImg,
    },
    {
        name: "Seaborn",
        level: "Proficient",
        image: seabornImg,
    },
    {
        name: "Reinforcement Learning",
        level: "Intermediate",
        image: rlImg,
    },
    {
        name: "NLP (Natural Language Processing",
        level: "Intermediate",
        image: nlpImg,
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
                    I am a passionate learner with expertise in Java, data structures, and algorithms. I have hands-on experience in developing machine learning models, web applications, and solving real-world problems, with a focus on environmental sustainability and innovative solutions.
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
                                            textAlign: "center",
                                        }}
                                        dangerouslySetInnerHTML={{ __html: skill.name }}
                                    />
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
