import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const styles = {
        navbar: (darkMode) => ({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '10px 20px',
            backgroundColor: darkMode ? '#000000' : '#ffffff',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
        }),
        logo: (darkMode) => ({
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: darkMode ? '#FFD700' : '#FF4500',
            marginLeft: '10px',
        }),
        navItemsContainer: {
            display: 'flex',
            gap: '22px',
            alignItems: 'center',
        },
        navLink: (darkMode) => ({
            textDecoration: 'none',
            color: darkMode ? '#FFD700' : '#FF4500',
            fontSize: '1rem',
        }),
        activeLink: (darkMode) => ({
            borderBottom: `2px solid ${darkMode ? '#FFD700' : '#FF4500'}`,
            paddingBottom: '2px',
        }),
        iconButton: (darkMode) => ({
            color: darkMode ? '#FFD700' : '#FF4500',
        }),
    };

    return (
        <nav style={styles.navbar(darkMode)}>
            <div style={styles.logo(darkMode)}>PORTFOLIO</div>
            {windowWidth < 768 ? (
                <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconButton
                        onClick={toggleDarkMode}
                        style={styles.iconButton(darkMode)}
                    >
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <IconButton
                        onClick={handleMenuClick}
                        style={styles.iconButton(darkMode)}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    </div>
                    <Menu
                        anchorEl={anchorEl}
                        open={isMenuOpen}
                        onClose={handleMenuClose}
                        keepMounted
                    >
                        {['Home', 'About', 'Education & Experience','Skills', 'Projects', 'Contact'].map((item) => (
                            <MenuItem
                            key={item}
                            onClick={handleMenuClose}
                            component={Link}
                            to={`/${
                                item === 'Home'
                                    ? ''
                                    : item === 'Education & Experience'
                                    ? 'education-experience'
                                    : item.toLowerCase()
                            }`}
                            style={{
                                ...(location.pathname ===
                                    `/${
                                        item === 'Home'
                                            ? ''
                                            : item === 'Education & Experience'
                                            ? 'educationexperience'
                                            : item.toLowerCase()
                                    }` && styles.activeLink(darkMode)),
                            }}
                        >
                                {item}
                            </MenuItem>
                        ))}
                        <MenuItem onClick={toggleDarkMode}>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </MenuItem>
                    </Menu>
                </>
            ) : (
                <div style={styles.navItemsContainer}>
                    {['Home', 'About', 'Education & Experience','Skills', 'Projects', 'Contact'].map((item) => (
                       <Link
                       key={item}
                       to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                       style={{
                           ...styles.navLink(darkMode),
                           ...(location.pathname ===
                               `/${item.toLowerCase() === 'home' ? '' : item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`
                               && styles.activeLink(darkMode)),
                       }}
                   >
                            {item}
                        </Link>
                    ))}
                    <IconButton
                        onClick={toggleDarkMode}
                        style={styles.iconButton(darkMode)}
                    >
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
