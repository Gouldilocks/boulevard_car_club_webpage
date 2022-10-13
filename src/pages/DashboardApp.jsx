import { Grid } from "@mui/material";
import Calendar from "../components/home/Calendar";
import GalleryImages from "../components/home/GalleryImages";
import PreviousEvents from "../components/home/PreviousEvents";
import UpcomingEvents from "../components/home/UpcomingEvents";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";


export default function DashboardApp() {
  const [events, setEvents] = useState([]);

  // const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const calendarID = '7411c3e0764793087ce149c1ecd49bd74d8d3efb8e356e9655842049c0a6529d@group.calendar.google.com';
  // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const apiKey = 'AIzaSyCa49PJCk_XJEgAyvnkNgyXw6yXhuNrk4M';

  const verticalSpacing = 4;
  const horizontalSpacing = 10;

  const getEvents = (calendarID, apiKey) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items;
            setEvents(events);
          },
          function (err) {
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };

  useEffect(() => {
    const events = getEvents(calendarID, apiKey);
    setEvents(events);
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={horizontalSpacing}
      >


        {/* First Column */}
        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={verticalSpacing}
          >

            <UpcomingEvents comingEvents={events} />
            <Calendar/>

          </Grid>
        </Grid>
        {/* End First Column */}


        {/* Second Column */}
        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            // alignItems="center"
            spacing={verticalSpacing}
          >

            {/* Show the images */}
            <GalleryImages />

            {/* Show the previous events */}
            <PreviousEvents prevEvents={events}/>

          </Grid>
        </Grid>
        {/* End Second Column */}

      </Grid>
    </>
  );
}