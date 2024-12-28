import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Components/Navbar.js';

const About = ({darkMode,toggleDarkMode}) => {
   

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

   

    const styles = {
        container: (darkMode) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', // Centers content vertically
            minHeight: '100vh',
            backgroundColor: darkMode ? '#121212' : '#f5f5f5',
            color: darkMode ? '#ffffff' : '#000000',
            padding: '20px',
            boxSizing: 'border-box',
        }),
        innerContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle background for dark mode
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
            maxWidth: '800px',
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: darkMode ? '#FFEB3B' : '#FF5722', // Yellow for dark mode, orange for light mode
        },
        content: {
            fontSize: '1.2rem',
            lineHeight: '1.8',
        },
        boldText: {
            color: darkMode ? '#FFEB3B' : '#FF5722', // Yellow for dark mode, orange for light mode
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={styles.container(darkMode)}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div style={styles.innerContainer}>
                    <h1 style={styles.title}>About Me</h1>
                    <p style={styles.content}>
                        Hello! I'm <strong style={styles.boldText}>Rohan Lal Gudivada</strong>, a passionate Full Stack Developer and ML/DL enthusiast. <br />
                        I love creating seamless web applications and exploring cutting-edge technologies to solve real-world problems.I always try to upgrade my skills based on the latest trends in the industry.
                        I strive to deliver 
                        user-friendly and efficient solutions. <br /><br />
                        I always aim to learn new technologies and improve my skill set. Currently, I am learning 
                        <strong style={styles.boldText}> React  Node and React Native</strong> to expand my expertise in web development and mobile app development.
                    </p>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default About;
