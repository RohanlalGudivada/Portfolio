import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Components/Navbar.js';

const Contact = ({darkMode,toggleDarkMode}) => {
    
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
            justifyContent: 'center',
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
        },
        content: {
            fontSize: '1.2rem',
            lineHeight: '1.8',
            textAlign: 'center',
        },
        contactInfo: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
        },
        contactItem: {
            fontSize: '1.2rem',
            marginBottom: '10px',
            color: darkMode ? '#ffffff' : '#000000',
            textDecoration: 'none',
        },
        link: {
            color: darkMode ? '#FFEB3B' : '#FF5722', // Yellow for dark mode, orange for light mode
            textDecoration: 'none',
            fontWeight: 'bold',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={styles.container(darkMode)}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div style={styles.innerContainer}>
                    <h1 style={styles.title}>Contact Me</h1>
                    <p style={styles.content}>
                        Feel free to reach out if you have any questions or just want to connect! <br />
                        You can contact me via the following methods:
                    </p>
                    <div style={styles.contactInfo}>
                        <a href="mailto: rohanlalgudivada4@gmail.com" style={styles.contactItem}>
                            Email: <span style={styles.link}>rohanlalgudivada4@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/rohanlal-gudivada" style={styles.contactItem}>
                            LinkedIn: <span style={styles.link}>linkedin.com/in/Rohan</span>
                        </a>
                        <p style={styles.contactItem}>
                            Phone: <span style={styles.link}>+91 9032373749</span>
                        </p>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Contact;
