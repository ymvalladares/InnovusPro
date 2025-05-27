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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import InfoIcon from "@mui/icons-material/Info";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useMediaQuery from "@mui/material/useMediaQuery";

//-------Components---------
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Header from "./components/Header";
import InformationSmall from "./components/InformationSmall";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const navItems = [
  { name: "Home", id: "header", icon: <HomeIcon /> },
  { name: "Services", id: "services", icon: <BuildIcon /> },
  { name: "Contacts", id: "contact", icon: <ContactPhoneIcon /> },
  { name: "Reviews", id: "reviews", icon: <InfoIcon /> },
];

const MainSitePage = () => {
  const matches = useMediaQuery("(min-width:500px)");

  const handleScroll = (item) => {
    console.log(item);
    const el = document.getElementById(`${item}`);
    console.log(el);
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
                marginLeft: matches ? "80px" : "210px",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
                color: "white",
                border: "1px solid #FC5A22",
                backgroundColor: "#FC5A22",

                ":hover": {
                  color: "#FC5A22",
                  backgroundColor: "white",
                  textDecoration: "underline",
                  border: "1px solid #FC5A22",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontWeight: "bold",
                  borderRadius: "10px",
                },
              }}
              variant="outlined"
            >
              Appoiments
              <ArrowRightAltIcon />
            </Button>
          </Toolbar>
        </AppBar>
        ;{/* Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={() => handleScroll(item.id)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>

      {/* --------- Others components ----------- */}
      <Header />
      <Services />
      <Reviews />
      <Contact />
      <Services />
      <Footer />
    </Box>
  );
};

export default MainSitePage;
