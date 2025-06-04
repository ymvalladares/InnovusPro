import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import Img1 from "../photos/Gallery/imag1.jpeg";
import Img2 from "../photos/Gallery/imag2.jpeg";
import Img3 from "../photos/Gallery/imag3.jpeg";
import Img4 from "../photos/Gallery/imag4.jpeg";
import Img5 from "../photos/Gallery/imag5.jpeg";
import Img6 from "../photos/Gallery/imag6.jpeg";

const images = [
  {
    original: Img2,
    thumbnail: Img2,
  },
  {
    original: Img1,
    thumbnail: Img1,
  },
  {
    original: Img3,
    thumbnail: Img3,
  },
  {
    original: Img4,
    thumbnail: Img4,
  },
  {
    original: Img5,
    thumbnail: Img5,
  },
  {
    original: Img6,
    thumbnail: Img6,
  },
];

const WorkPictures = () => {
  return (
    <Container>
      <Box
        mt={7}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#5D4037", // Wood tone
            mb: 1,
          }}
        >
          Our Craftsmanship Gallery
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#795548",
          }}
        >
          Explore the exceptional quality, fine craftsmanship, and intricate
          detail present in every custom woodwork and full renovation project we
          create.
        </Typography>
      </Box>
      <Box mt={4}>
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Side */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex" }} mt={4}>
            <Box sx={{ px: 2, py: 3 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#5D4037", mb: 2 }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.8 }}
              >
                At <strong>Innovus Carpentry</strong>, our mission is to bring
                your vision to life through exceptional craftsmanship,
                personalized service, and timeless design.
                <br />
                <br />
                We believe that every space should reflect the personality and
                needs of the people who live in it. That’s why we’re dedicated
                to delivering{" "}
                <span style={{ color: "#5B76CD", fontWeight: "bold" }}>
                  custom woodwork and full renovations
                </span>
                that are not only beautiful, but functional and built to last.
                <br />
              </Typography>
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ImageGallery
              items={images}
              showNav={true}
              showPlayButton={true}
              showFullscreenButton={true}
              showBullets={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WorkPictures;
