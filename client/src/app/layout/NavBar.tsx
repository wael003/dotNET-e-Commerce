import { AppBar, Badge, Box, colors, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { toggleDarkMode } from "./uiSlice";

const midLink = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const navStyle = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: colors.blue[500]
    },
    '&.active': {
        color: colors.blue[900]
    }
}

const rightLink = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]



export default function NavBar() {


    const { loading, darkMode } = useAppSelector(state => state.uiSlice);
    const dispatch = useAppDispatch();

    return (
        <AppBar>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Typography variant="h6" component={NavLink} to={'/'} sx={navStyle}>RE-STORE</Typography>
                    <IconButton onClick={() => dispatch(toggleDarkMode())} >
                        {darkMode ? <DarkMode /> : <LightMode sx={{ color: 'yellow' }} />}
                    </IconButton>
                </Box>


                <List sx={{ display: 'flex' }}>
                    {midLink.map(({ title, path }) => (
                        <ListItem
                            key={path}
                            component={NavLink}
                            to={path}
                            sx={navStyle}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>


                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <IconButton size="large" sx={{ color: 'inherit' }}>
                        <Badge badgeContent={3} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>


                    <List sx={{ display: 'flex' }}>
                        {rightLink.map(({ title, path }) => (
                            <ListItem
                                key={path}
                                component={NavLink}
                                to={path}
                                sx={navStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Toolbar>
            {loading && (
                <Box sx={{ width: '100%', marginBottom: '-9px' }}>
                    <span className="loader"></span>
                </Box>
            )}
        </AppBar>
    )
}