import { useEffect, useState } from "react"
import type { Product } from "../models/product"
import Catalog from "../../features/catalog/Catalog"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import NavBar from "./NavBar"


function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType ,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box
      sx={{height: '100vh', background: darkMode ?
        'radial-gradient(circle, #1e3aBa, #111B27)' :
        'radial-gradient(circle, #e3f2fd, #fafafa)'
        ,  py: 4
      }}
      >
        <Container maxWidth="xl" sx={{ mt: 8 }}>
          <Catalog products={products} />
        </Container>
      </Box>

    </ThemeProvider>

  )
}
export default App
