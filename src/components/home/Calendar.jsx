import {Grid, Box, Typography } from "@mui/material";


export default function Calendar() {
  const sizes = 2;
  return (
    <>
    
      <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
        <Typography variant="h4">Calendar</Typography>
      </Grid>

      {/* Calendar */}
      <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The image"
          src={'https://img.freepik.com/free-vector/calendar-icon-white-background_1308-84634.jpg?w=2000'}
        />
      </Grid>
    </>
  )
}