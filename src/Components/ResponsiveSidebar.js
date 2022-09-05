import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function ResponsiveSidebar(props, { pageComponent }) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    //nightmode functionality
    let [nightMode, setNightMode] = useState(false);
    nightMode === true ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme');

    //nightmode function
    const addNightModeToBody = () => {
        nightMode === true ? setNightMode(false) : setNightMode(true);
    }

    const drawer = (
        <div>
            <Toolbar>
                <Box component='div' sx={{ display: 'flex', alignItems: 'center' }}>
                    <InputLabel className='dark-mode-label' sx={{ p: 2, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        Dark Mode :
                        <Box
                            component='span'
                            className='dark-mode-icon'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#efefef',
                                borderRadius: '50%',
                                p: 1
                            }}>
                            <input type='checkbox' onChange={addNightModeToBody} />
                            <DarkModeIcon sx={{ position: 'absolute', borderRadius: '50%', p: 1, fontSize: '2rem' }} />
                        </Box>
                    </InputLabel>
                </Box>
            </Toolbar>
            <Divider />
            <List
                sx={{
                    border: 'none',
                    p: 0,
                    backgroundColor: 'transparent'
                }}
            >
                {
                    //sidebar datat bemappelem
                    SidebarData.map((page) => {

                        //gyors destructure a bejárt objectből
                        const { title, icon, path } = page;

                        //router linkeket adok vissza a bejárást követően
                        return (

                            <Link
                                to={path}
                                onClick={handleDrawerToggle}
                            >
                                <ListItem className='row sidebar-link' sx={{ padding: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
                                    <Box component='div' id='icon'>{icon}</Box>
                                    <Box component='div' id='title'>{title}</Box>
                                </ListItem>
                            </Link>
                        )
                    })

                }
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        CV of Bálint Pénzes
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'transparent', overflow: 'hidden' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {pageComponent}
            </Box>
        </Box>
    );
}