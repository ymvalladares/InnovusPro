import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Container,
  Grid,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export function OutlineMarkEmailRead(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8v-2H4V8l8 5l8-5v5h2V6c0-1.1-.9-2-2-2m-8 7L4 6h16zm5.34 11l-3.54-3.54l1.41-1.41l2.12 2.12l4.24-4.24L23 16.34z"
      ></path>
    </svg>
  );
}

export function BaselineLocalPhone(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
      ></path>
    </svg>
  );
}

export function Location2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0a5 5 0 0 0-5 5c0 5 5 11 5 11s5-6 5-11a5 5 0 0 0-5-5m0 8.063a3.063 3.063 0 1 1 0-6.126a3.063 3.063 0 0 1 0 6.126M6.063 5a1.938 1.938 0 1 1 3.876 0a1.938 1.938 0 0 1-3.876 0"
      ></path>
    </svg>
  );
}

const Contact = () => {
  const mobileDevice = useMediaQuery("(min-width:500px)");

  const [find_us, setFind_us] = useState("");

  const handleChange = (event) => {
    setFind_us(event.target.value);
  };

  return (
    <Container sx={{ height: mobileDevice ? "740px" : "1300px" }} id="contact">
      <Box
        sx={{
          padding: { xs: 2, sm: 2 },
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color="error" fontWeight="bold">
          Here To Help
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }} fontWeight="bold">
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          enim risus lorem diam. Viverra egestas penatibus feugiat vitae in
          dignissim.
        </Typography>
      </Box>
      <Grid container spacing={10} height="500px">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box height="60%">
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
                Email: support@gmail.com
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
                Phone: 904 852 3178
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
                103 Newton Rd, West Park, FL 33023
              </Typography>
            </Box>
            <Card
              sx={{
                borderRadius: 3,
                background: "#fafafa",
                marginTop: "35px",
                height: "100%",
              }}
              elevation={0}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24603774.063066497!2d-98.43531051738283!3d41.16965166893879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9aeba28625be1%3A0xe5894de048733b8f!2s103%20Newton%20Rd%2C%20West%20Park%2C%20FL%2033023!5e0!3m2!1ses-419!2sus!4v1748299391033!5m2!1ses-419!2sus"
                width="100%"
                height="100%"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} mt={mobileDevice ? 0 : 4}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              required
              label="Name"
              variant="standard"
              fullWidth
              placeholder="John/Jane Doe"
              focused
            />
            <TextField
              required
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              placeholder="name@company.com"
              focused
            />
            <TextField
              required
              label="Phone"
              type="tel"
              variant="standard"
              fullWidth
              placeholder="+1 (206) 987-6543"
              focused
            />
            <FormControl required fullWidth focused variant="standard">
              <InputLabel id="demo-simple-select-standard-label">
                How Did You Find Us
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={find_us}
                onChange={handleChange}
                label="Find_US"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Friends</MenuItem>
                <MenuItem value={20}>Our WebSite</MenuItem>
                <MenuItem value={30}>Marketplace</MenuItem>
              </Select>
            </FormControl>
            <TextField
              required
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              focused
              placeholder="Hello, I’m interested in..."
            />
            <Button variant="contained" color="primary" size="large">
              Submit Message Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
