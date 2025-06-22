import React from "react";
import { Box, Typography, Container, Grid, Card } from "@mui/material";
import FormContacts from "../Helpers/FormContacts";

export function OutlineMarkEmailRead(props) {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8v-2H4V8l8 5l8-5v5h2V6c0-1.1-.9-2-2-2m-8 7L4 6h16zm5.34 11l-3.54-3.54l1.41-1.41l2.12 2.12l4.24-4.24L23 16.34z"
      ></path>
    </svg>
  );
}

export function BaselineLocalPhone(props) {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
      ></path>
    </svg>
  );
}

export function Location2(props) {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0a5 5 0 0 0-5 5c0 5 5 11 5 11s5-6 5-11a5 5 0 0 0-5-5m0 8.063a3.063 3.063 0 1 1 0-6.126a3.063 3.063 0 0 1 0 6.126M6.063 5a1.938 1.938 0 1 1 3.876 0a1.938 1.938 0 0 1-3.876 0"
      ></path>
    </svg>
  );
}

const Contact = () => {
  return (
    <Container sx={{ py: { xs: 6, md: 8 } }} id="contact">
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography fontWeight="bold" variant="subtitle1" color="primary">
          Testimonials
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }} fontWeight="bold">
          Contact Us
        </Typography>
        <Typography variant="body1">
          Looking for custom woodwork, home renovations, or quality
          craftsmanship? Innovus Carpentry is your trusted partner for tailored
          carpentry solutions in Miami, Florida.
        </Typography>
      </Box>

      <Grid container spacing={10} alignItems="stretch">
        {/* Left Side */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }} mt={4}>
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}
          >
            {/* Contact Info */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <OutlineMarkEmailRead color="blue" width="30px" />
              <Typography variant="body1" fontWeight="bold">
                Email: innovuscarpentryremodeling@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <BaselineLocalPhone color="blue" width="30px" />
              <Typography variant="body1" fontWeight="bold">
                Phone: +1 305 497 0754
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Location2 color="blue" width="30px" />
              <Typography variant="body1" fontWeight="bold">
                3661 sw 58 ave 33023 west park, Fl, 33023{" "}
              </Typography>
            </Box>

            {/* Google Map */}
            <Card
              sx={{
                borderRadius: 3,
                background: "#fafafa",
                flexGrow: 1,
                mt: 3,
                overflow: "hidden",
              }}
              elevation={0}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.7363432831457!2d-80.20410552480931!3d25.976685977217407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9aebba9c15ba7%3A0x641d970915ecba28!2s3661%20SW%2058th%20Ave%2C%20West%20Park%2C%20FL%2033023!5e0!3m2!1ses-419!2sus!4v1749059478328!5m2!1ses-419!2sus"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
          <FormContacts />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
