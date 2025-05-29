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
import CoffeeIcon from "@mui/icons-material/Coffee";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import InfoIcon from "@mui/icons-material/Info";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useMediaQuery from "@mui/material/useMediaQuery";

import React from "react";

import Services from "./Services";
import { Header } from "./Header";
import Reviews from "./Reviews";
import Contact from "./Contact";

const navItems = ["Home", "About", "Services", "Prices", "Projects"];
const Navbar = () => {
  const matches = useMediaQuery("(min-width:500px)");
  const handleScroll = (item) => {
    console.log(item);
    // const el = document.getElementById(id);
    // if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  return (
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
                key={item}
                disablePadding
              >
                <ListItemButton
                  sx={{ textAlign: "center", cursor: "pointer" }}
                  onClick={() => handleScroll(item)}
                >
                  <ListItemText
                    sx={{ color: "#3BC798", fontWeight: "bold" }}
                    primary={item}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: 250,
          }}
        >
          {/* Title and Divider at the Top */}
          <Typography variant="h6" sx={{ p: 2 }}>
            Menu
          </Typography>
          <Divider />

          {/* List Items */}
          <List sx={{ flexGrow: 1 }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ContactPhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </List>

          {/* Coffee Icon Fixed at Bottom Left */}
          <Box sx={{ p: 2, position: "absolute", bottom: 10, left: 10 }}>
            <IconButton>
              <CoffeeIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
