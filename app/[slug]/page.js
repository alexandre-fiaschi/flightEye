'use client';

import Iconify from "@/components/iconify";
import { Box, Container, Grid, Tabs, Tab, Typography, useTheme } from "@mui/material";
import { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Details() {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container>
      <Grid container gap={4} flexDirection="column">
        <Grid item>
          <Grid container flex gap={1}>
            <Iconify width={36} icon="material-symbols:flight" />
            <Typography variant="h3">
              Flights to Prague from Innsbruck
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Box
            component="img"
            src="https://plus.unsplash.com/premium_photo-1661963139522-22525f644234?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Alt"
            loading="lazy"
            maxHeight={350}
            width="100%"
            sx={{ objectFit: 'cover' }}
            borderRadius={0.5}
          />
        </Grid>
      </Grid>

      <Grid container my={6} justifyContent="space-around">
        <Grid item sx={{ textAlign: 'center' }}>
          <Iconify color={theme.palette.primary.main} icon="material-symbols:verified" />
          <Typography variant="subtitle1">Verified</Typography>
        </Grid>
        <Grid item sx={{ textAlign: 'center' }}>
          <Iconify color={theme.palette.primary.main} icon="material-symbols:flight" />
          <Typography variant="subtitle1">Easy</Typography>
        </Grid>
        <Grid item sx={{ textAlign: 'center' }}>
          <Iconify color={theme.palette.primary.main} icon="material-symbols:security" />
          <Typography variant="subtitle1">Secure</Typography>
        </Grid>
      </Grid>

      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabIndex} onChange={handleChange}>
            <Tab label="Flights Listing" value={0} {...a11yProps(0)} />
            <Tab label="Must Know" value={1} {...a11yProps(1)} />
            <Tab label="Reviews" value={2} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tabIndex} index={0}>
          <Typography>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={tabIndex} index={1}>
          Section Two
        </CustomTabPanel>
        <CustomTabPanel value={tabIndex} index={2}>
          Reviews?!
        </CustomTabPanel>
      </Box>
    </Container>
  )
}
