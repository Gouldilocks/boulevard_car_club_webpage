import { Outlet, useNavigate } from "react-router-dom";
import { Button, Grid, Typography} from "@mui/material"; 

export default function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >


        {/* Begin Header */}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid
            container
            direction="row"
            justifyContent="right"
            alignItems="right"
            spacing={8}
          >
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Typography>Boulevard Car Club</Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Button onClick={() => {
                navigate("/home");
              }}>Home</Button>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Button onClick={() => {
                navigate("/events");
              }}>Events </Button>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Button onClick={() => {
                navigate("/gallery")
              }}>Gallery </Button>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Button onClick={() => {
                navigate("/about")
              }}>About Us </Button>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Button onClick={() => {
                navigate("/contact")
              }}>Contact Us</Button>
            </Grid>
          </Grid>
        </Grid>
        {/* End Header */}


        {/* Begin Body */}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Outlet/>
        </Grid>
        {/* End Body */}


        {/* Begin Footer */}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography> This will be the footer</Typography>
        </Grid>
        {/* End Footer */}
      </Grid>
    </>
  );
}