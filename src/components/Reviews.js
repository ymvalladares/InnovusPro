import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  Grid,
} from "@mui/material";
import GoogleReviewsWidget from "google-reviews-widget";

export function Messages(props) {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.0"
      >
        <path d="M14.25 14.25v-9h-9.5v6h6z"></path>
        <path d="m4.75 7.25l-3 3v-8.5h10v3"></path>
      </g>
    </svg>
  );
}

const reviews = [
  {
    icon: <Messages color="blue" width="50px" />,
    name: "John Doe",
    job: "Chief Executive",
    text: "Absolutely impressed with the craftsmanship!. Their attention to detail and professionalism exceeded all expectations. Highly recommended!",
  },
  {
    icon: <Messages color="blue" width="50px" />,
    name: "Robert Henrich",
    job: "CEO, HK Traders",
    text: "Reliable, responsive, and top-quality work!. They communicated clearly, stuck to the timeline, and delivered amazing woodwork for our home office.",
  },
  {
    icon: <Messages color="blue" width="50px" />,
    name: "Leonardo Gamon",
    job: "CEO, Skyline Realty",
    text: "Custom woodwork that adds real character to our home. The design was flawless, and the finish speaks of true craftsmanship. Will definitely work with them again!",
  },
];

const Reviews = () => {
  const theme = useTheme();
  return (
    <Container id="reviews">
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: theme.spacing(4),
        }}
      >
        <Box mt={10}>
          <Typography fontWeight="bold" variant="subtitle1" color="primary">
            Testimonials
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Trusted by Thousands of People & Companies
          </Typography>
          <Typography variant="body1" sx={{ marginY: 2 }}>
            At Stitch Cleaning Service, let us help you solve problems so that
            you can focus on your mission. We support businesses through periods
            of expansion, succession.
          </Typography>
        </Box>
      </Box>
      <Box mb={5} sx={{ width: "100%" }}>
        <Container>
          <Box sx={{ mt: 3 }}>
            <GoogleReviewsWidget instanceId="D1OduNB0uy0leoC8l1Il" />
          </Box>
          {/* <Grid container spacing={6}>
            {reviews.map((card, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Card
                  sx={{
                    borderRadius: 3,
                    background: "#fafafa",
                    display: "flex",
                    flexDirection: "column",
                    px: 3,
                    py: 4,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  }}
                  elevation={0}
                >
                  <Box sx={{ mb: 2, color: "grey.700" }}>{card.icon}</Box>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="h6"
                      component="div"
                      fontWeight={700}
                      sx={{ color: "#18181B", mb: 1 }}
                    >
                      {card.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#494949" }}>
                      {card.text}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "#494949", mt: "10px" }}
                      fontWeight="bold"
                    >
                      {card.job}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid> */}
        </Container>
      </Box>
    </Container>
  );
};

export default Reviews;
