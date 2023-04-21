import { React, useState } from 'react';
import { MenuItem, Tooltip, Button, Avatar, Container, Menu, Typography, IconButton, Toolbar, Box, AppBar } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from '../../assets/Imgs/Logo.png'
import LoginForm from '../../Componentes/Login/Login';
import MediaQuery from '../../assets/MediaQuerys/MediaQuerys';
import s from './Navbar.module.css'

const pages = ['Tratamientos', 'Nosotros', 'Contacto'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    // const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false)

    const [usuarioLoguedo, setUsuarioLogueado] = useState(false)

    //handler para el hamburger menu
    const handleToggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpenDrawer(open)
    }

    //handler para menu user
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ backgroundColor: 'transparent', position: 'absolute' }}>
                <Toolbar disableGutters>
                    {/* logo */}
                    <Box sx={{ display: 'flex', mr: 1 }}>
                        <img className={s.logo} src={logo} alt="Estetica Jime" />
                    </Box>

                    {/* logo hamburger */}
                    <Box sx={{ flexGrow: 1, display: MediaQuery('flex', 'none') }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleToggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* menu desplegable */}
                        <Drawer
                            anchor='left'
                            open={openDrawer}
                            onClose={handleToggleDrawer(false)}
                        >
                            <Box
                                sx={{ width: 250, height: "100%" }}
                                backgroundColor={'var(--lila-palido-claro)'}
                                role='presentation'
                                onClick={handleToggleDrawer(false)}
                                onKeyDown={handleToggleDrawer(false)}
                            >
                                <List>
                                    {pages.map((page, index) => (
                                        <ListItem key={page} disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={page} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                    {/* <Box sx={{display: MediaQuery('flex', 'none'), mr:1}}>
                        <img className={s.logo} src={logo} alt="Estetica Jime" />
                    </Box>                     */}

                    {/* lista de pages en views grande */}
                    <Box sx={{ flexGrow: 1, display: MediaQuery('none', 'flex') }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleToggleDrawer(false)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* menu usuario */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {usuarioLoguedo ? <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> : <Avatar> <AccountCircleIcon /> </Avatar>}

                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {
                                usuarioLoguedo ?
                                    settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    )
                                    ) : <MenuItem>
                                        <LoginForm />
                                    </MenuItem>
                            }
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;