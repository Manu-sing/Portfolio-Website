// import { info } from '../info/info';
// import React, { ReactNode } from 'react';

// interface Props {
//     icon: ReactNode,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     changeTheme: () => void;
// }

// export const Navbar: React.FC<Props> = ({ changeTheme, icon }) => {
//     return (
//         <div className='navbar'>
//             <div className='nav-initials'>
//                 <p>{info.initials}</p>
//             </div>
//             <div className='nav-info'>
//                 <p>projects</p>
//                 <p>skills</p>
//                 <p>contact</p>
//                 <button className="moon-sun" onClick={changeTheme}>{icon}</button>
//             </div>
//         </div>
//     )
// }

import React, { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';
import useStyles from "./styles";
import { FaMoon, FaSun } from "react-icons/fa";
import me from "../../images/selfBorder.jpeg";
import { HashLink } from 'react-router-hash-link'


interface Props {
    icon: ReactNode,
    changeTheme: () => void;
    window?: () => Window;
    isDarkTheme: boolean;
}

const drawerWidth = 240;
const navItems = ['projects', 'skills', 'contact'];

export default function Navbar(props: Props) {
    const { window, changeTheme, icon, isDarkTheme } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <strong>EG.</strong>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Button onClick={changeTheme}>{isDarkTheme ? <FaSun color="white" size={20} /> : <FaMoon color="black" size={20} />}</Button>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" className={classes.appbar} position="absolute" id="navbar">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <AiOutlineMenu />
                    </IconButton>
                    <Avatar src={me} sx={{ height: '70px', width: '70px' }} className={classes.profile} />
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <strong>EG.</strong>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                <HashLink to={`#${item}`} smooth>{item}</HashLink>
                            </Button>
                        ))}
                        <Button onClick={changeTheme}>{icon}</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
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
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

