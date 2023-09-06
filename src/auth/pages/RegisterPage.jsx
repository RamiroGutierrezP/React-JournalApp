
import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'


export const RegisterPage = () => {
  return (

    <AuthLayout title="Register">
          <form>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField  
                  label="Name..."  
                  type="text"  
                  // placeholder="correo@gmail.com"  
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField  
                  label="Email..."  
                  type="email"  
                  // placeholder="Password"  
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField  
                  label="Password..."  
                  type="password"  
                  // placeholder="Password"  
                  fullWidth
                />
              </Grid>
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                <Grid item xs={ 12 }>
                  <Button variant="contained" fullWidth>
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
