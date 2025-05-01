import React, {useMemo} from 'react'
import {Routes, Route} from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme.js"
import { Toaster } from "react-hot-toast"
import Navbar from './Components/Navbar'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Login from './pages/Login'
import Summary from './pages/Summary.jsx';
import Paragraph from './pages/Paragraph.jsx';
import ChatBot from './pages/ChatBot.jsx';
import JsConverter from './pages/JsConverter.jsx';
import ScifiImage from './pages/ScifiImage.jsx';
const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Navbar/>
    <Toaster/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/paragraph' element={<Paragraph/>}/>
        <Route path='/chatbot' element={<ChatBot/>}/>
        <Route path='/js-converter' element={<JsConverter/>}/>
        <Route path='/scifi-image' element={<ScifiImage/>}/>
      </Routes>
    </ThemeProvider>
    </>
  )
}

export default App