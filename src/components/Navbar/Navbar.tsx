import React from 'react';
import {
    AppBar,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';

import { useHistory } from 'react-router-dom';

const menuItems = [
    {text: 'Главная', href: '/', component: <HomeTwoToneIcon/>},
    {text: 'Счётчик', href: '/counter', component: <HourglassFullTwoToneIcon/>},
    {text: 'Погода', href: '/weather', component: <WbSunnyTwoToneIcon/>},
];

const Navbar: React.FC = (): React.ReactElement => {
    const history = useHistory();
    const [open, setOpen] = React.useState<boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CssBaseline/>
            <AppBar
                position="fixed"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Навигационное меню
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <List>
                    {menuItems.map(({text, href, component}, index) => (
                        <ListItem button key={href} onClick={() => history.push(href)}>
                            <ListItemIcon>
                                {component}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default Navbar;