import React, { useState } from 'react'
import { Box, Link } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {Snackbar} from '@mui/material';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from './firebase-config';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom'

// import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: "#087cec",
      contrastText: "#fff",
    },
  },
});
function App() {
  let navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [loginEmail, setLoginEmail] = useState(null)
  const [loginPassword, setLoginPassword] = useState(null)
  const [signupEmail, setSignupEmail] = useState(null)
  const [signupPassword, setSignupPassword] = useState(null)
  const [toastmessage, settoastmessage] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubmit = () => {
  //   setOpen(false);
  //   setNotificationOpen(true);
  // };

  const handleAction = (e, id) => {
    e.preventDefault()
    console.log(id)
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, loginEmail, loginPassword)
        .then((response) => {
          navigate('/products')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error.code)
          settoastmessage(error.code)
          setNotificationOpen(true)
            })
    }
    else if (id === 2) {
   
      createUserWithEmailAndPassword(authentication, signupEmail, signupPassword)
        .then((response) => {
          console.log(response)
          setOpen(false);
          
    settoastmessage("Account creation successful. You may now login")
          setNotificationOpen(true)
         
   })
   .catch((error) => {
    console.log(error.code)
    settoastmessage(error.code)
    setNotificationOpen(true)
      })
   
   }
  }

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return (
    <>
    <Snackbar
  open={notificationOpen}
  autoHideDuration={6000}
  onClose={handleNotificationClose}
  message={toastmessage}
/>
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <form className='form'>
    <div className='login'>
        <p className='loginHead'>Create a new account</p>
    </div>
      <input type="text" placeholder="Set email Address" onChange={(e) => setSignupEmail(e.target.value)}/>
      <input type="password" placeholder=" Set password" onChange={(e) => setSignupPassword(e.target.value)}/>
      
  </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={(e) => handleAction(e,2)} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
   
<div style={{display:"flex",justifyContent:"center"}}>
   <Box className='loginBox'
      sx={{
        width: 450,
        height: 350,
        backgroundColor: '#FEFEFE'
      }}
    >
<ThemeProvider theme={theme}>
<div>
  <form className='form'>
    <div className='login'>
        <p className='loginHead'>Login</p>
    </div>
      <input type="text" placeholder="Email Address" onChange={(e) => setLoginEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}/>
      <Grid container spacing={2}>
        <Grid item xs={7}>
        <Link underline="none" color="#087cec" fontSize={'18px'} onClick={handleClickOpen}>
          {'New user? Create an account'}
        </Link>
        </Grid>
        <Grid item xs={5} class="button">
          {/* <Button variant="contained" color="neutral" >Login</Button> */}
          <input type="button" value="Login" onClick={(e) => handleAction(e,1)}/>
        </Grid>
    </Grid>
  </form>


</div>
</ThemeProvider>
      </Box>

      </div>
    </>
  );
}

export default App;
