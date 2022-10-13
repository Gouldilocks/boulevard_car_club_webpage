import {Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Calendar() {
  const navigate = useNavigate();
  const sizes = 2;
  return (
    <>
    
      <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
        <Typography variant="h4">Calendar</Typography>
      </Grid>

      <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
        <Typography>Click Below to view all our events!</Typography>
      </Grid>
      {/* Calendar */}
      <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
        <Box
          component="img"
          onClick={() => {
            navigate("/events");
          }}

          onMouseEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onMouseLeave={() => {
            document.body.style.cursor = "default";
          }}

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