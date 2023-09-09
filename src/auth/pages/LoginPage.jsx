import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link } from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSingIn } from '../../store'


export const LoginPage = () => {

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'ramiro@google.com',
    password: '123456'
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch (checkingAuthentication());

  }

  const onGoogleSignIn = () => {
    dispatch (startGoogleSingIn());
  }

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  return (

    <AuthLayout title="Login">
          <form onSubmit={ onSubmit }>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField  
                  label="Email..."  
                  type="email"
                  name='email'
                  onChange={ onInputChange }
                  value={ email }
                  // placeholder="correo@gmail.com"  
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField  
                  label="Password..."  
                  type="password"  
                  name='password'
                  onChange={ onInputChange }
                  value={ password }
                  // placeholder="Password"  
                  fullWidth
                />
              </Grid>
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                    disabled={ isAuthenticating }
                    type='submit' 
                    variant="contained" 
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button 
                    disabled={ isAuthenticating }
                    onClick={onGoogleSignIn}  
                    variant="contained" 
                    fullWidth
                  >
                    <Google/>
                    <Typography sx={{ml: 1}}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to="/auth/register">
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
    </AuthLayout>
  )
}
