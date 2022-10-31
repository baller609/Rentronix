import React, { useState } from 'react'
import { Box, Link } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {Snackbar} from '@mui/material';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth' 
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom'

const Details = props => {
  // const {
  //   addToCart,
  //   openModal,
  //   detailProduct: { title, inCart, img, info, price, id, company }
  // } = props;

  return (
    <div>
    <Box className='loginBox'
      sx={{
        width: 1300,
        height: 600,
        backgroundColor: '#FEFEFE'
      }}
    >
{/* <ThemeProvider theme={theme}> */}
<div>
      {/* <input type="text" placeholder="Email Address" onChange={(e) => setLoginEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}/> */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <img src="https://en.wikipedia.org/wiki/Superman" alt="product"/>
        {/* <Link underline="none" color="#087cec" fontSize={'18px'} >
          {'New user? Create an account'}
        </Link> */}
        </Grid>
        <Grid item xs={6} class="button">
          {/* <Button variant="contained" color="neutral" >Login</Button> */}
          {/* <input type="button" value="Login" /> */}
          <h1>Product title</h1>
          <p>Product details</p>
          <h3>$100</h3>
          <input type="button" value="Buy Now"/>
          <input type="button" value="Add to cart" />
        </Grid>
    </Grid>


</div>
{/* </ThemeProvider> */}
      </Box>
</div>
  );
};

// const mapStateToProps = state => ({
//   detailProduct: state.reducer.detailProduct
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     addToCart: id => {
//       dispatch(addToCart(id));
//     },
//     handleDetail: id => {
//       dispatch(handleDetail(id));
//     }
//   };
// };

export default Details
