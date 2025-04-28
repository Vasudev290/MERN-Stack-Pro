import React, {useMemo} from 'react'
import {Routes, Route} from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme.js"
import Navbar from './Components/Navbar'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Login from './pages/Login'
const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </ThemeProvider>
    </>
  )
}

export default App