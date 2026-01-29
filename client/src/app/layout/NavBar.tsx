import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

type Props = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export default function NavBar({darkMode, setDarkMode}: Props) {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6">RE-STORE</Typography>
                <IconButton onClick={() => setDarkMode(!darkMode)} >
                    {darkMode ? <DarkMode/> : <LightMode sx={{color: 'yellow'}}/>}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}