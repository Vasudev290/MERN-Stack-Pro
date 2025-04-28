import React, { useState } from 'react'
import {  Box, Typography, useTheme, useMediaQuery, TextField, Button, Alert, Collapse} from "@mui/material";
import { Link, useNavigate} from 'react-router-dom';
import toast from "react-hot-toast"
import axios from "axios"
const Register = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    //Media
    const isNotMobile = useMediaQuery('(min-width: 1000px)')
    //States;
    const [userName, setUserName] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [error, setError] = useState(" ")

    //Submit Handler 
    const handlerSubmitForm = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/v1/auth/register', {userName, email, password})
            toast.success('User Register Successfull!')
            navigate('/login')
        } catch (err) {
            console.log(error)
            if(err.response.data.error){
                setError(err.response.data.error)
            }else if(err.message){
                setError(err.message)
            }
        }
    }
  return (
    <Box width={isNotMobile ? "40%" : "80%"} p={'2rem'} m={'2rem auto'} borderRadius={5} sx={{boxShadow: 5}} backgroundColor={theme.palette.background.alt}>
        <form action="" onSubmit={handlerSubmitForm}>
            <Typography variant='h3'>Sign Up</Typography>
            <TextField label='Username' type='text' required margin='normal' fullWidth value={userName} onChange={(e) => setUserName(e.target.value)}></TextField>
            <TextField label='Email' type='email' required margin='normal' fullWidth value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
            <TextField label='Passowrd' type='password' required margin='normal' fullWidth value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
            <Button type='submit' fullWidth variant='contained' size='large' sx={{color:"white", mt:2}}>Sign Up</Button>
            <Typography m={2}>Already have an account?<Link to="/login">Please Login</Link></Typography>
        </form>
    </Box>
  )
}

export default Register