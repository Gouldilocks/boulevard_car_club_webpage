import { Grid } from "@mui/material";
import Calendar from "../components/home/Calendar";
import GalleryImages from "../components/home/GalleryImages";
import PreviousEvents from "../components/home/PreviousEvents";
import UpcomingEvents from "../components/home/UpcomingEvents";


export default function DashboardApp() {
  const verticalSpacing = 4;
  const horizontalSpacing = 16;
  return (
    <>
      <Grid
        container
        direction="row"
        // justifyContent="center"
        // alignItems="center"
        spacing={horizontalSpacing}
      >


        {/* First Column */}
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Grid
            container
            direction="column"
            // justifyContent="center"
            alignItems="center"
            spacing={verticalSpacing}
          >

            <UpcomingEvents/>
            <Calendar/>

          </Grid>
        </Grid>
        {/* End First Column */}


        {/* Second Column */}
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Grid
            container
            direction="column"
            // justifyContent="center"
            alignItems="center"
            spacing={verticalSpacing}
          >

            {/* Show the images */}
            <GalleryImages />

            {/* Show the previous events */}
            <PreviousEvents />

          </Grid>
        </Grid>
        {/* End Second Column */}

      </Grid>
    </>
  );
}