import { AppBar, Badge, Box, colors, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

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

type Props = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export default function NavBar({ darkMode, setDarkMode }: Props) {
    return (
        <AppBar>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Typography variant="h6" component={NavLink} to={'/'} sx={navStyle}>RE-STORE</Typography>
                    <IconButton onClick={() => setDarkMode(!darkMode)} >
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
        </AppBar>
    )
}