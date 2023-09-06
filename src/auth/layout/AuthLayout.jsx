import { Grid, Typography } from "@mui/material"
import Proptypes from 'prop-types'


export const AuthLayout = ({children, title}) => {
  return (
    <Grid 
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
            // width: '100vw',
            minHeight: '100vh', 
            bgcolor: 'primary.main', 
            padding: '4'
        }}
    >
        <Grid item
            className="box-shadow"
            xs={ 3 }
            sx={{ bgcolor: 'white', padding: '30px', borderRadius: '10px' }}
        > 
            <Typography variant="h5" sx={{mb: 1}}>{ title }</Typography>

            { children }
        </Grid>
    </Grid>
    
  )
}

AuthLayout.propTypes = {
    children: Proptypes.node.isRequired,
    title: Proptypes.string.isRequired,
}
