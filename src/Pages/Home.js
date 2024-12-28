import React, { useState,useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Components/Navbar.js';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import rohan from "./rohan.png";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import resumePdf from './resume.pdf';

const Home = ({darkMode,toggleDarkMode}) => {
    
    const [openDialog, setOpenDialog] = useState(false);

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
            justifyContent : 'center',
            minHeight: '100vh',
            backgroundColor: darkMode ? '#121212' : '#f5f5f5',
            color: darkMode ? '#ffffff' : '#000000',
            padding: '0 20px',
        }),
        mainContent: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '100px',
        },
        textContent: {
            width: '60%',
            textAlign: 'left',
        },
        imageSection: {
            width: '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageContainer: (darkMode) => ({
            position: 'relative',
            borderRadius: '15px',
            boxShadow: darkMode
                ? '0 0 30px rgba(255, 215, 0, 0.5)'
                : '0 0 30px rgba(255, 69, 0, 0.5)',
            overflow: 'hidden',
            padding: '10px',
            background: darkMode ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 69, 0, 0.1)',
            maxWidth: '400px',
            marginTop: '-10px',
        }),
        image: {
            width: '100%',
            borderRadius: '10px',
            objectFit: 'cover',
        },
        circularImage: {
            width: '200px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '10%',
        },
        title: {
            fontSize: '3rem',
            marginBottom: '1rem',
        },
        subtitle: {
            fontSize: '1.5rem',
            marginBottom: '2rem',
        },
        highlight: (darkMode) => ({
            color: darkMode ? '#FFD700' : '#FF4500',
            fontWeight: 'bold',
        }),
        ctaButton: (darkMode) => ({
            fontSize: '1rem',
            color: darkMode ? '#121212' : '#ffffff',
            backgroundColor: darkMode ? '#FFD700' : '#FF4500',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '1rem',
        }),
        socialIcons: {
            display: 'flex',
            gap: '15px',
            marginBottom: '1rem',
        },
        icon: (darkMode) => ({
            fontSize: '2rem',
            color: darkMode ? '#FFD700' : '#FF4500',
        }),
        mobileContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '20px',
        },
    };

    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div style={styles.container(darkMode)}>
                {/* Navbar */}
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                {/* Responsive Layout */}
                <div
                    style={{
                        ...styles.mainContent,
                        flexDirection: windowWidth < 768 ? 'column' : 'row',
                        alignItems: windowWidth < 768 ? 'center' : 'flex-start',
                    }}
                >
                    {/* Mobile View */}
                    {windowWidth < 768 ? (
                        <div style={styles.mobileContainer}>
                            <img
                                src={rohan}
                                alt="rohan"
                                style={styles.circularImage}
                            />
                            <h1 style={styles.title}>I'm Rohan Lal Gudivada 👋</h1>
                            <p style={styles.subtitle}>
                                A passionate{' '}
                                <span style={styles.highlight(darkMode)}>
                                    Full Stack Developer
                                </span>{' '}
                                and an{' '}
                                <span style={styles.highlight(darkMode)}>
                                    ML/DL Enthusiast
                                </span>{' '}
                                specializing in building web applications and
                                solving complex problems.
                            </p>

                            {/* Social Icons */}
                            <div style={styles.socialIcons}>
                                <IconButton
                                    onClick={() =>
                                        window.open(
                                            'https://www.instagram.com/rohanlalgudivada4/',
                                            '_blank'
                                        )
                                    }
                                >
                                    <InstagramIcon style={styles.icon(darkMode)} />
                                </IconButton>
                                
                                <IconButton
                                    onClick={() =>
                                        window.open(
                                            'https://www.linkedin.com/in/rohanlal-gudivada',
                                            '_blank'
                                        )
                                    }
                                >
                                    <LinkedInIcon style={styles.icon(darkMode)} />
                                </IconButton>
                                <IconButton
                                    onClick={() =>
                                        window.open(
                                            'https://github.com/RohanlalGudivada',
                                            '_blank'
                                        )
                                    }
                                >
                                    <GitHubIcon style={styles.icon(darkMode)} />
                                </IconButton>
                            </div>

                            {/* Open CV Dialog Button */}
                            <button
                                style={styles.ctaButton(darkMode)}
                                onClick={handleOpenDialog}
                            >
                                View My Resume
                            </button>
                        </div>
                    ) : (
                        // Desktop View
                        <>
                            <div style={styles.textContent}>
                                <h1 style={styles.title}>I'm Rohan Lal Gudivada 👋</h1>
                                <p style={styles.subtitle}>
                                    A passionate{' '}
                                    <span style={styles.highlight(darkMode)}>
                                        Full Stack Developer
                                    </span>{' '}
                                    and an{' '}
                                    <span style={styles.highlight(darkMode)}>
                                        ML/DL Enthusiast
                                    </span>{' '}
                                    specializing in building web applications and
                                    solving complex problems.
                                </p>

                                {/* Social Icons */}
                                <div style={styles.socialIcons}>
                                    <IconButton
                                        onClick={() =>
                                            window.open(
                                                'https://www.instagram.com/rohanlalgudivada4/',
                                                '_blank'
                                            )
                                        }
                                    >
                                        <InstagramIcon style={styles.icon(darkMode)} />
                                    </IconButton>
                                   
                                    <IconButton
                                        onClick={() =>
                                            window.open(
                                                'https://www.linkedin.com/in/rohanlal-gudivada',
                                                '_blank'
                                            )
                                        }
                                    >
                                        <LinkedInIcon style={styles.icon(darkMode)} />
                                    </IconButton>
                                    <IconButton
                                        onClick={() =>
                                            window.open(
                                                'https://github.com/RohanlalGudivada',
                                                '_blank'
                                            )
                                        }
                                    >
                                        <GitHubIcon style={styles.icon(darkMode)} />
                                    </IconButton>
                                </div>

                                {/* Open CV Dialog Button */}
                                <button
                                    style={styles.ctaButton(darkMode)}
                                    onClick={handleOpenDialog}
                                >
                                    View My Resume
                                </button>
                            </div>

                            {/* Image Section */}
                            <div style={styles.imageSection}>
                                <div style={styles.imageContainer(darkMode)}>
                                    <img src={rohan} alt="rohan" style={styles.image} />
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* CV Dialog */}
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>My Resume</DialogTitle>
                    <DialogContent>
                        <embed
                            src={resumePdf}
                            type="application/pdf"
                            width="100%"
                            height="500px"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </ThemeProvider>
    );
};

export default Home;
