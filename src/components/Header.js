import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import header_photo from "../photos/fondo.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const mobileDevice = useMediaQuery("(min-width:500px)");

  return (
    <Box
      sx={{
        position: "relative",
        height: mobileDevice ? "550px" : "720px",
        px: mobileDevice ? 10 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-20px",
        overflow: "hidden",
        // Fondo de imagen principal
        backgroundImage: `url(${header_photo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay de opacidad */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Stack spacing={4} alignItems="center">
          <Typography
            fontWeight="bold"
            variant={mobileDevice ? "h3" : "h4"}
            gutterBottom
            sx={{
              color: "#fff",
              textShadow: "0 2px 16px #000, 0 1px 8px #333",
              letterSpacing: 1,
            }}
          >
            Welcome to Your Local Carpentry Experts
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              opacity: 0.97,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 400,
              textShadow: "0 2px 10px #111",
              maxWidth: 700,
            }}
          >
            We bring years of experience, precision, and dedication to every
            project—big or small. Modern appliances complement our custom
            cabinetry and woodwork, giving your space a clean, cohesive look.
            Updated appliances combined with quality craftsmanship can
            significantly boost your property’s resale value.
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              color="primary"
              sx={{
                px: 3,
                textTransform: "none",
                backgroundColor: "#5B76CD",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                boxShadow: "0 4px 24px 0 #0004",
                ":hover": {
                  color: "#5B76CD",
                  backgroundColor: "white",
                  textDecoration: "underline",
                  border: "1px solid #5B76CD",
                },
              }}
            >
              Contact Me
            </Button>
            <Button
              color="primary"
              sx={{
                px: 3,
                textTransform: "none",
                border: "1px solid #5B76CD",
                backgroundColor: "white",
                color: "#5B76CD",
                fontWeight: "bold",
                borderRadius: "10px",
                boxShadow: "0 4px 24px 0 #0002",
                ":hover": {
                  color: "white",
                  backgroundColor: "#5B76CD",
                  textDecoration: "underline",
                  border: "1px solid #5B76CD",
                },
              }}
            >
              Get a Quote
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
export default Header;
