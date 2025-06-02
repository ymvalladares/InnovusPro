import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  SvgIcon,
  Container,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

// SVG icons as React components
function AwardIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" sx={{ fontSize: 60 }}>
      <circle
        cx="12"
        cy="10"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 2v2M12 18v4M4 10h2M18 10h2M5.5 18l2.5-2M18.5 18l-2.5-2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M8 22l4-2 4 2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </SvgIcon>
  );
}

function ShieldCheckIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" sx={{ fontSize: 60 }}>
      <path
        d="M12 3l7 4v5c0 5.25-3.25 9.25-7 11-3.75-1.75-7-5.75-7-11V7l7-4z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M9.5 12.5l2 2 3-3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </SvgIcon>
  );
}

function Phone24Icon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 32 32" sx={{ fontSize: 60 }}>
      <path
        d="M6 6c4 10 10 16 20 20l2-4a2 2 0 0 0-1-3l-4-1a2 2 0 0 0-2 1l-1 2c-3-1-7-5-8-8l2-1a2 2 0 0 0 1-2l-1-4a2 2 0 0 0-3-1z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="23.5"
        cy="8.5"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <text x="21" y="12" fontSize="7" fill="currentColor" fontWeight="bold">
        24
      </text>
    </SvgIcon>
  );
}

// Data for the cards
const cards = [
  {
    icon: <AwardIcon color="action" />,
    title: "99% winning guarantee",
    description:
      "Full range of shipping disputes such as charter party disputes, demurrage claims, purchase agreements, trade finance, carriage and claims.",
  },
  {
    icon: <ShieldCheckIcon color="action" />,
    title: "Secure management",
    description:
      "Full range of shipping disputes such as charter party disputes, demurrage claims, purchase agreements, trade finance, carriage and claims.",
  },
  {
    icon: <Phone24Icon color="action" />,
    title: "Full time support",
    description:
      "Full range of shipping disputes such as charter party disputes, demurrage claims, purchase agreements, trade finance, carriage and claims.",
  },
];

var services = [{}];

const Services = () => {
  return (
    <Box mt={4} sx={{ width: "100%" }} id="services">
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Card
                sx={{
                  borderRadius: 3,
                  background: "#fafafa",
                  minHeight: 220,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
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
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#494949" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
