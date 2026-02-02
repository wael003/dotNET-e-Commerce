import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";




function App() {

  const { darkMode } = useAppSelector(state => state.uiSlice);


  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{
          height: '100vh', background: darkMode ?
            'radial-gradient(circle, #1e3aBa, #111B27)' :
            'radial-gradient(circle, #e3f2fd, #fafafa)'
          , py: 4
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 8 }}>
          <Outlet />

        </Container>

      </Box>

    </ThemeProvider>

  )
}
export default App
