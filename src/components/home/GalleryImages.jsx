import { list_of_gallery_images } from "../../data/homeData"
import { Grid, Box, Typography } from "@mui/material";


export default function GalleryImages() {
  const sizes = 2;
  return (
    <>
      <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
        <Typography variant="h4">Gallery</Typography>
      </Grid>

      {list_of_gallery_images.map(img =>
        <Grid item xs={sizes} sm={sizes} md={sizes} lg={sizes} xl={sizes}>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 203, md: 137 },
              maxWidth: { xs: 320, md: 220 },
            }}
            alt="The image"
            src={img}
          />
        </Grid>
      )}
    </>
  )
}