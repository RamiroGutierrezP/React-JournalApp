import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = (  ) => {
  return (
    <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
            width: '100vw',
            minHeight: '100vh', 
            bgcolor: 'primary.main', 
            padding: '4'
        }}
    >
        <Grid item
            alignItems= 'center'
        > 
            <CircularProgress color="warning"/>
        </Grid>
    </Grid>
  )
}
