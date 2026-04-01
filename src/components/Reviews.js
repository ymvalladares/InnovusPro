import React, { useEffect } from "react";
import { Container, Typography, Box, useTheme } from "@mui/material";

const Reviews = () => {
  const theme = useTheme();

  useEffect(() => {
    // Suppress ResizeObserver warning from Elfsight widget
    const resizeObserverError = window.onerror;
    window.onerror = (message, ...args) => {
      if (typeof message === "string" && message.includes("ResizeObserver")) {
        return true;
      }
      return resizeObserverError?.(...args);
    };

    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.onerror = resizeObserverError;
    };
  }, []);

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
          mt: 5,
        }}
      >
        <Box mt={10}>
          <Typography fontWeight="bold" variant="subtitle1" color="primary">
            Testimonials
          </Typography>

          <Typography variant="h4" fontWeight="bold">
            What the Clients Say About Innovus Carpentry and Remodeling
          </Typography>

          <Typography variant="body1" sx={{ marginY: 2 }}>
            At Innovus Carpentry and Remodeling LLC, we take pride in turning
            our clients' visions into reality with expert craftsmanship and
            personalized service.
          </Typography>
        </Box>
      </Box>

      <Box mb={5} sx={{ width: "100%" }}>
        <Box sx={{ mt: 3, px: 3 }}>
          <div
            className="elfsight-app-98105296-9e08-4488-813b-a62e6758329e"
            data-elfsight-app-lazy
          ></div>
        </Box>
      </Box>
    </Container>
  );
};

export default Reviews;
