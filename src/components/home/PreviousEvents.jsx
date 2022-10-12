import { Grid, Typography } from "@mui/material";
import { list_of_previous_events } from "../../data/homeData";
import { useEffect, useState } from "react";


export default function PreviousEvents({prevEvents}) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (prevEvents) {

      // sort the events by date, and then filter out the new events
      const sortedEvents = prevEvents.sort((a, b) => {
        return new Date(a.start.dateTime) - new Date(b.start.dateTime);
      });

      const filteredEvents = sortedEvents.filter((event) => {
        return new Date(event.start.dateTime) < new Date();
      });

      // only use the top 2 events
      setEvents(filteredEvents.slice(0, 2));
    }
  }, [prevEvents]);

  const sizes = 2;
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <Typography variant="h4">Previous Events</Typography>
      </Grid>

      {console.log("events: ", events)}
      {events?.map((event) => {
        console.log(event);
        return (
          <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
            <Typography variant="h6">{event.summary}</Typography>
            <Typography>-Date: {new Date(event.start.dateTime).toLocaleDateString("en-US", options)}</Typography>
            <Typography>-Start Time: {new Date(event.start.dateTime).toLocaleString().split(',')[1]}</Typography>
            <br></br>
            {event.location ? <Typography>-Location: {event.location}</Typography> : null}
            <br></br>
            {event.description ? <Typography>{event.description}</Typography> : null}
          </Grid>
        );
      })}
    </>
  )
}