import { list_of_gallery_images } from "../../data/homeData"
import { Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"
import image1 from "../../images/lineup.png"
import image2 from "../../images/looking.png"

export default function GalleryImages() {
  const images = [
    image1,
    image2,
  ]

  const navigate = useNavigate();

  const sizes = 2;
  return (
    <>
      <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
        <Typography variant="h4">Gallery</Typography>
      </Grid>

      {images.map(img =>
        <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
          <Box
            onClick={() => navigate("/gallery")}
            onMouseEnter={() => {
              document.body.style.cursor = "pointer";
            }}
            onMouseLeave={() => {
              document.body.style.cursor = "default";
            }}
            component="img"
            sx={{
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The image"
            src={img}
          />
        </Grid>
      )}
    </>
  )
}