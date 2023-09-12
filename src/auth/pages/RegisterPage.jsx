
import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startEmailPasswordRegister } from '../../store/auth'

const formData = {
  email: '',
  password: '',
  displayName: '',
}
const formValidations = {
  email: [(value) => value.includes('@'), 'The email need a @'],
  password: [(value) => value.length >= 6, 'The password must be at least 6 characters'],
  displayName: [(value) => value.length >= 3, 'The name must be at least 3 characters'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);


  
  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, emailValid, passwordValid, displayNameValid 
  } = useForm(formData, formValidations);
  
  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    
    dispatch(startEmailPasswordRegister(formState));
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
                  error={ !!displayNameValid && formSubmitted }
                  helperText= { (formSubmitted) ? displayNameValid : '' }
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
                  error={ !!emailValid && formSubmitted }
                  helperText= { (formSubmitted) ? emailValid : '' }
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
                  error={ !!passwordValid && formSubmitted }
                  helperText= { (formSubmitted) ? passwordValid : '' }
                  fullWidth
                />
              </Grid>
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                <Grid item xs={ 12 } display={ errorMessage ? '' : 'none' }>
                  <Alert severity='error'>
                    { errorMessage }
                  </Alert>
                </Grid>
                <Grid item xs={ 12 }>
                  <Button 
                    disabled={ isCheckingAuthentication }
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
