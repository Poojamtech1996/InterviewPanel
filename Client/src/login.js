import React, { useState } from "react";
import {CssBaseline} from '@mui/material';
import { useNavigate } from "react-router";
import {Link} from '@mui/material';
import {Box} from '@mui/material';
import{Avatar} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import {Typography} from '@mui/material';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button} from '@mui/material';
import { Input } from "@mui/icons-material";
import "./common/global.css";
import TextField from '@mui/material/TextField';
import { fetchLogin } from "./hooks/userHook";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux'
import { userInfo } from "./redux/loginRedux";

const defaultTheme = createTheme();

export default function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const user = useSelector((state) => state.userValue);
const dispatch = useDispatch()
const navigate = useNavigate()

const handleSubmit=(event)=>{
    event.preventDefault();
    const data = {
        email,
        password
    }
    fetchLogin(data).then(res=>
        {
        if(res.data.text==="Login Successfull"){
            toast.success("Login Successfull!")
            window.localStorage.setItem("login",true);
            const {name, email , mobile} = res.data.data[0];
            const role = res.data.role[0].role;
            const reduxData = {
              login : true,
              name ,
              email,
              mobile,
              role
            }
            dispatch(userInfo(reduxData));
            setTimeout(()=>{
                navigate("/")
            },1500)
        }
        else{
          window.localStorage.setItem("login",false);
            toast.error("Login Failed!")
        }
        }
    ).catch(err=>console.log("Error Occured while login in",err));
}
return(
    <ThemeProvider theme={defaultTheme}>
       <Toaster/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '35%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #19a89d',
            borderRadius : 8
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#19a89d' ,marginTop:'7%'}} >
            <LockOutlined/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" 
           onSubmit={(e)=>handleSubmit(e)}
           noValidate sx={{ mt: 2 }}>
            <TextField id="outlined-email-input" className="mt-3" label="Email" type="text" fullWidth size="small" value={email} onChange={(event)=>setEmail(event.target.value)}/><br></br>
            <TextField id="outlined-password-input" className="mt-4" label="Password" type="password"  size="small" value={password} onChange={(event)=>setPassword(event.target.value)} fullWidth autoComplete="current-password"/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className='loginButton'
              sx={{ mt: 3,mb :4 }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5, mb: 4 }} />
      </Container>
    </ThemeProvider>
    )
}

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://wonderful-bush-0c1871003.3.azurestaticapps.net">
          rviz2.net
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }