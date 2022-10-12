import { Grid, Typography } from "@mui/material";
import { list_of_previous_events } from "../../data/homeData";

export default function PreviousEvents() {
  const sizes = 2;
  return (
    <>
      <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
        <Typography variant="h4">Previous Events</Typography>
      </Grid>

      {/* Show the previous events */}
      {list_of_previous_events.map(event =>
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