import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Link,
  IconButton,
  Divider,
} from "@mui/material";

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

export function Tiktok(props) {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"></path>
        <path d="M10 12a3 3 0 1 0 3 3V6c.333 1 1.6 3 4 3"></path>
      </g>
    </svg>
  );
}

export function InstagramSolid(props) {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function FacebookCircleLine(props) {
  return (
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M13.001 19.938a8.001 8.001 0 0 0-1-15.938a8 8 0 0 0-1 15.938V14h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.73 2.73 0 0 1 12.537 6.9c.382-.205.857-.328 1.687-.381q.494-.032 1.278.08v1.9h-.5c-.917 0-1.296.043-1.522.164a.73.73 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2zm-1 2.062c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"
      ></path>
    </svg>
  );
}

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#FAFAFA", py: 4 }} mt={7}>
      <Container>
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h6" fontWeight="bold">
              "Transform Your Home, Elevate Your Lifestyle—Because You Deserve a
              Space That Inspires, Comforts, and Reflects Your Vision!"
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                href="https://www.facebook.com/share/1DsV1DgPVT/?mibextid=wwXIfr"
                aria-label="fingerprint"
                color="primary"
              >
                <FacebookCircleLine width="28px" color="blue" />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/INNOVUS_CARPENTRY"
                aria-label="fingerprint"
                color="primary"
              >
                <InstagramSolid color="blue" width="32px" />
              </IconButton>
              <IconButton
                href="https://www.tiktok.com/@innovus_carpentry?_t=ZT-8wvjafNSOK6&_r=1"
                aria-label="fingerprint"
                color="primary"
              >
                <Tiktok color="blue" width="28px" />
              </IconButton>

              {/* <Button
                variant="contained"
                color="primary"
                href="https://www.hackerrank.com/profile/yordan_j_martin1"
              >
                <Code />
              </Button> */}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center", // centra verticalmente
                  gap: 4.0,
                }}
              >
                <OutlineMarkEmailRead color="blue" width="30px" />
                <Typography variant="body1" fontWeight="bold">
                  Email: innovuscarpentryremodeling@gmail.com
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center", // centra verticalmente
                  gap: 4.0,
                }}
              >
                <BaselineLocalPhone color="blue" width="30px" />
                <Typography variant="body1" fontWeight="bold">
                  Phone: +1 305 497 0754
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  alignItems: "center", // centra verticalmente
                  gap: 4.0,
                }}
              >
                <Location2 color="blue" width="30px" />
                <Typography variant="body1" fontWeight="bold">
                  3661 sw 58 ave 33023 west park, Miami, Florida
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ p: 2 }} />

        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "space-between",
            p: 2,
            ml: { xs: 10, sm: 0 },
          }}
        >
          <Typography
            m={1}
            variant="body2"
            color="textSecondary"
            fontWeight="bold"
          >
            © Copyright 2025 - MyOwn
          </Typography>
          <Box>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              underline="hover"
              sx={{ mr: 2 }}
            >
              Privacy Policy
            </Link>
            <Typography
              variant="body2"
              component="span"
              color="textSecondary"
              sx={{ mx: 1 }}
            >
              |
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="textSecondary"
              underline="hover"
              sx={{ ml: 1 }}
            >
              Terms of Use
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
