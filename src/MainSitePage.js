import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  ListItemButton,
  Box,
  Link,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import useMediaQuery from "@mui/material/useMediaQuery";

//-------Components---------
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Header from "./components/Header";
import InformationSmall from "./components/InformationSmall";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { keyframes } from "@emotion/react";
import CoffeeIcon from "@mui/icons-material/Coffee";

const jump = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const navItems = [
  { name: "Home", id: "header", icon: <HomeIcon /> },
  { name: "Services", id: "services", icon: <BuildIcon /> },
  { name: "Contacts", id: "contact", icon: <ContactPhoneIcon /> },
  { name: "Reviews", id: "reviews", icon: <InfoIcon /> },
];

const MainSitePage = () => {
  const matches = useMediaQuery("(min-width:500px)");

  const handleScroll = (item) => {
    const el = document.getElementById(`${item}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  return (
    <Box sx={{ flexGrow: 1 }} id="header">
      <Box>
        <AppBar
          position="static"
          sx={{
            boxShadow: "none",
            zIndex: 10,
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Toolbar sx={{ marginLeft: "10px" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{
                display: { xs: "block", sm: "none" },
                color: "black",
                marginTop: "5px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", md: "block", lg: "block" },
                color: "#3BC798",
                fontWeight: "bold",
                marginLeft: "50px",
              }}
            >
              Innovus Services
            </Typography>
            <List
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {navItems.map((item) => (
                <ListItem
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block",
                      lg: "block",
                    },
                  }}
                  key={item.id}
                  disablePadding
                >
                  <ListItemButton
                    sx={{ textAlign: "center", cursor: "pointer" }}
                    onClick={() => handleScroll(item.id)}
                  >
                    <ListItemText
                      sx={{ color: "#3BC798", fontWeight: "bold" }}
                      primary={item.name}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Button
              sx={{
                marginRight: matches ? "50px" : "0px",
                marginLeft: matches ? "80px" : "170px",
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "#5B76CD",
                borderRadius: "10px",
                boxShadow: "0 4px 24px 0 #0004",
                paddingLeft: "20px",
                paddingRight: "20px",

                ":hover": {
                  color: "#5B76CD",
                  backgroundColor: "white",
                  textDecoration: "underline",
                  border: "1px solid #5B76CD",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontWeight: "bold",
                  borderRadius: "10px",
                },
              }}
              variant="outlined"
            >
              <LocalPhoneIcon sx={{ mr: 2 }} />
              <Link color="inherit" href="tel:+13054970754">
                +1 305 497 0754
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        ;{/* Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: 250,
              mt: "9px",
            }}
          >
            {/* Title & Divider */}
            <ListItem button>
              <ListItemIcon sx={{ color: "blue" }}>{<HomeIcon />}</ListItemIcon>
              <ListItemText primary="Innovus" />
            </ListItem>

            <Divider />
            <List sx={{ width: 250 }}>
              {navItems.map((item) => (
                <ListItem
                  button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                >
                  <ListItemIcon sx={{ color: "blue" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>

            {/* <Box
              sx={{
                p: 10,
                position: "absolute",
                bottom: 10,
                left: 10,
                width: "40px",
                height: "40px",
                backgroundColor: "red",
              }}
            >
              <IconButton>
                <CoffeeIcon fontSize="large" />
              </IconButton>
            </Box> */}
          </Box>
        </Drawer>
      </Box>

      {/* --------- Others components ----------- */}
      <Header />
      <Services />
      <Reviews />
      <Contact />
      <Services />
      <Footer />
      <FloatingWhatsApp
        phoneNumber="+13054970754"
        accountName="Dagmar"
        allowClickAway="true"
      />

      {/* <Fab
        color="success"
        aria-label="whatsapp"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1000,
          boxShadow: 3,
          animation: `${jump} 1.5s ease-in-out infinite`,
        }}
      >
        <WhatsAppIcon />
      </Fab> */}
    </Box>
  );
};

export default MainSitePage;
