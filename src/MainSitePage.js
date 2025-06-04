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
import logo from "./photos/LogoInnovus.jpeg";

//-------Components---------
import Services from "./components/Services";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import WorkPictures from "./components/WorkPictures";

const navItems = [
  { name: "Home", id: "header", icon: <HomeIcon /> },
  { name: "Services", id: "services", icon: <BuildIcon /> },
  { name: "Reviews", id: "reviews", icon: <InfoIcon /> },
  { name: "Contacts", id: "contact", icon: <ContactPhoneIcon /> },
];

const MainSitePage = () => {
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
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              px: { xs: 2, sm: 4 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
                sx={{
                  display: { xs: "block", sm: "none" },
                  color: "black",
                  mr: 1,
                  mt: 1,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                component="img"
                src={logo} // <-- replace with your logo path
                alt="Innovus Logo"
                sx={{
                  height: 40,
                  width: 40,
                  mr: 2,
                  display: { xs: "none", sm: "block" },
                }}
              ></Box>
              <Typography
                variant="h6"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#5B76CD",
                  fontWeight: "bold",
                }}
              >
                Innovus Carpentry
              </Typography>
            </Box>
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
                  <Link
                    onClick={() => handleScroll(item.id)}
                    underline="none"
                    sx={{
                      display: "block",
                      textAlign: "center",
                      cursor: "pointer",
                      py: 1,
                      px: 2,
                      color: "#5B76CD",
                      fontWeight: "bold",
                      borderRadius: 1,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              ))}
            </List>
            <Button
              component="a"
              href="tel:+13054970754"
              sx={{
                // mt: { xs: 1, sm: 0 },
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "#5B76CD",
                borderRadius: "10px",
                boxShadow: "0 4px 24px 0 #0004",
                px: 2.5,
                py: 1,
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "#5B76CD",
                  backgroundColor: "white",
                  textDecoration: "underline",
                  border: "1px solid #5B76CD",
                },
              }}
              variant="outlined"
            >
              <LocalPhoneIcon sx={{ mr: 1 }} />
              +1 305 497 0754
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
              mt: "8px",
            }}
          >
            {/* Title & Divider */}
            <ListItem button>
              <ListItemIcon sx={{ color: "blue", marginLeft: "15px" }}>
                <Box
                  component="img"
                  src={logo} // <-- replace with your logo path
                  alt="Innovus Logo"
                  sx={{
                    height: 32,
                    width: 32,
                    mr: 1,
                  }}
                ></Box>
              </ListItemIcon>
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
      <WorkPictures />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp
        phoneNumber="+13054970754"
        accountName="Dagmar"
        allowClickAway="true"
      />
    </Box>
  );
};

export default MainSitePage;
