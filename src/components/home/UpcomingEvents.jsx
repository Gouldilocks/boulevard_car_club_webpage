import { Typography, Grid } from "@mui/material"
import { list_of_upcoming_events } from "../../data/homeData" 


export default function UpcomingEvents() {
  const sizes = 2;
  return (
    <>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <Typography variant="h4">Upcoming Events</Typography>
      </Grid>

      {list_of_upcoming_events.map(event =>
        <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
          <Typography variant="h6">{event.title}</Typography>
          <Typography>{event.date}</Typography>
          <Typography>{event.location}</Typography>
          <Typography>{event.details}</Typography>
        </Grid>
      )}
    </>
  )
}