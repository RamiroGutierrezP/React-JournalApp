import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
      <Grid 
          container
          spacing={ 0 }
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
              // width: '100vw',
              minHeight: 'calc(100vh - 110px)', 
              bgcolor: 'primary.main',
              borderRadius: 3,
          }}
      >
        <Grid item xs={ 12 }>
          <StarOutline sx={{ fontSize: '100px', color: 'white' }}/>
        </Grid>
        <Grid>
          <Typography color='white' variant='h5'>Select or create a new entry </Typography>
        </Grid>
      </Grid>
  )
}
