
import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  email: 'ramiro@google.com',
  password: '123456',
  displayName: 'Rama',
}

export const RegisterPage = () => {

  const { displayName, email, password, onInputChange } = useForm(formData);
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ displayName, email, password });
  }

  return (

    <AuthLayout title="Register">
          <form onSubmit={ onSubmit }>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField  
                  label="Name..."  
                  type="text"
                  name='displayName'
                  value={ displayName }
                  onChange={ onInputChange }
                  // placeholder="correo@gmail.com"  
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField  
                  label="Email..."  
                  type="email"  
                  name='email'
                  value={ email }
                  onChange={ onInputChange }
                  // placeholder="Password"  
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField  
                  label="Password..."  
                  type="password"
                  name='password'
                  value={ password }  
                  onChange={ onInputChange }
                  // placeholder="Password"  
                  fullWidth
                />
              </Grid>
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                <Grid item xs={ 12 }>
                  <Button 
                    type='submit'
                    variant="contained" fullWidth
                  >
                    Sign in
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{mr: 1}}> Already have an account? </Typography>
                  <Link component={ RouterLink } color='inherit' to="/auth/login">
                    Log in
                  </Link>
              </Grid>
            </Grid>
          </form>
    </AuthLayout>
  )
}
