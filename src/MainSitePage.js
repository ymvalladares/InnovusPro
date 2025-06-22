import React, { useState } from "react";
import {
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
  Typography,
  Link,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import logo from "./photos/LogoInnovus.jpeg";

// Componentes
import Header from "./components/Header";
import Services from "./components/Services";
import WorkPictures from "./components/WorkPictures";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const navItems = [
  { name: "Home", id: "header", icon: <HomeIcon /> },
  { name: "Services", id: "services", icon: <BuildIcon /> },
  { name: "Gallery", id: "gallery", icon: <CollectionsIcon /> },
  { name: "Reviews", id: "reviews", icon: <InfoIcon /> },
  { name: "Contacts", id: "contact", icon: <ContactPhoneIcon /> },
];

const MainSitePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar fijo */}
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          zIndex: 10,
          backgroundColor: "white",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            px: { xs: 2, sm: 4 },
          }}
        >
          {/* Logo e ícono menú */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{
                display: { xs: "block", sm: "none" },
                color: "black",
                mr: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              src={logo}
              alt="Innovus Logo"
              sx={{
                height: 40,
                width: 40,
                mr: 2,
                display: { xs: "none", sm: "block" },
              }}
            />
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

          {/* Navegación desktop */}
          <List sx={{ display: "flex" }}>
            {navItems.map((item) => (
              <ListItem
                key={item.id}
                sx={{ display: { xs: "none", sm: "block" } }}
                disablePadding
              >
                <Link
                  underline="none"
                  onClick={() => handleScroll(item.id)}
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

          {/* Teléfono */}
          <Box
            component="img"
            src={logo}
            alt="Innovus Logo"
            sx={{
              height: 40,
              width: 40,
              mr: 2,
              display: { xs: "block", sm: "none" },
            }}
          />
          <Button
            component="a"
            href="tel:+13054970754"
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#5B76CD",
              borderRadius: "10px",
              boxShadow: "0 4px 24px 0 #0004",
              px: 2.5,
              py: 1,
              display: { xs: "none", md: "flex" },
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

      {/* Espacio debajo del AppBar para evitar que tape contenido */}
      <Toolbar />

      {/* Drawer móvil */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: 250,
            mt: "8px",
            position: "relative",
          }}
        >
          <ListItem>
            <ListItemIcon sx={{ color: "blue", ml: 1 }}>
              <Box
                component="img"
                src={logo}
                alt="Innovus Logo"
                sx={{ height: 32, width: 32, mr: 1 }}
              />
            </ListItemIcon>
            <ListItemText primary="Innovus Carpentry" />
          </ListItem>

          <Divider />

          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                }}
              >
                <ListItemIcon sx={{ color: "blue" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>

          <Box
            sx={{
              position: "absolute",
              bottom: 35,
              left: 10,
              width: "90%",
            }}
          >
            <Button
              component="a"
              href="tel:+13054970754"
              sx={{
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
          </Box>
        </Box>
      </Drawer>

      {/* Secciones del sitio */}
      <Header />
      <Services />
      <WorkPictures />
      <Reviews />
      <Contact />
      <Footer />

      {/* WhatsApp flotante */}
      <FloatingWhatsApp
        phoneNumber="+13054970754"
        accountName="Dagmar"
        allowClickAway={true}
        avatar="https://avatars.githubusercontent.com/u/103406224"
      />
    </Box>
  );
};

export default MainSitePage;
