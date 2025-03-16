import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Components/Navbar.js';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Tooltip } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';


const EducationExperience = ({darkMode,toggleDarkMode}) => {
   
    const [openDialog, setOpenDialog] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
        typography: {
            fontFamily: `'Roboto', sans-serif`,
        },
    });


    const handleDialogOpen = () => setOpenDialog(true);
    const handleDialogClose = () => setOpenDialog(false);

    const styles = {
        container: (darkMode) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: darkMode
                ? 'linear-gradient(to bottom, #121212, #1c1c1c)'
                : 'linear-gradient(to bottom, #f5f5f5, #eaeaea)',
            color: darkMode ? '#ffffff' : '#000000',
            padding: '20px',
            paddingTop: '80px',
            boxSizing: 'border-box',
        }),
        card: {
            width: '100%',
            maxWidth: '800px',
            marginBottom: '20px',
            padding: '20px',
            borderRadius: '12px',
            backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            ':hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 12px 16px rgba(0, 0, 0, 0.2)',
            },
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            marginTop: '20px',
            color: darkMode ? '#FFEB3B' : '#FF5722',
            textAlign: 'center',
        },
        item: {
            marginBottom: '15px',
        },
        boldText: {
            color: darkMode ? '#FFEB3B' : '#FF5722',
            fontSize: '1.5rem'
        },
        divider: {
            margin: '20px 0',
        },
        iconButton: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px',
        },
        firstInternshipSection: {
            position: 'relative',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={styles.container(darkMode)}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div style={styles.card}>
                    <h1 style={styles.title}>Education</h1>

                    <div style={styles.item}>
                        <strong style={styles.boldText}>Happy Valley School</strong> - Passed Out: 2019 <br />
                        Scored: 94.4% CBSE Board [10th]
                    </div>
                    <div style={styles.item}>
                        <strong style={styles.boldText}>Happy Valley School</strong> - Passed Out: 2021 <br />
                        Scored: 92.4% CBSE Board [12th]
                    </div>
                    <div style={styles.item}>
                        <strong style={styles.boldText}>Amrita Vishwa Vidyapeetham</strong> - B.Tech in Computer Science & Engineering <br />
                        CGPA: 8.67 (2021 - Present, Expected Graduation: June 2025)
                    </div>
                </div>


                <div style={styles.card}>
                    <h1 style={styles.title}>Experience</h1>

                    <div style={styles.item}>
                        <strong style={styles.boldText}>Software Development Intern</strong> <br />
                        
                    </div>
                    <div style={styles.item}>
                        <strong style={styles.boldText}>EinSicht Technologies</strong> - January 2024 to February 2024 <br />
                        Hyderabad
                    </div>
                    <div style={styles.item}>
                        - Worked as SDE <br />
                        - Developed a Web Application using React Js<br />
                        -After the completion of the project in React Js then used React Native to convert the web application into a mobile application.
                    </div>
                </div>
            </div>

            


            

            
        </ThemeProvider>

        
    );
};

export default EducationExperience;
