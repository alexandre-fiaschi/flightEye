'use client';
import { Container, Dialog, DialogContent, Grid, IconButton, Typography } from "@mui/material";

import Card from "@/components/card";
import Iconify from "@/components/iconify";
import Logo from "@/components/logo";
import { useState } from "react";
import { useLocalStorage } from "@/hooks/use-localstorage";
import Link from "next/link";

const items = [
  { id: 1, title: 'Prague', price: 350, cover: 'https://plus.unsplash.com/premium_photo-1661963139522-22525f644234?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, title: 'Barcelona', price: 500, cover: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyY2Vsb25hfGVufDB8fDB8fHww' },
  { id: 3, title: 'Milan', price: 600, cover: 'https://images.unsplash.com/photo-1516296270211-f3ae5494e65d?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, title: 'Berlin', price: 400, cover: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, title: 'Tbilisi', price: 200, cover: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, title: 'Doha', price: 1000, cover: 'https://images.unsplash.com/photo-1537345532964-7c8f0749f8b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default function Home() {
  const [regionSet, setRegionSet] = useLocalStorage('regionSet', null)
  const [open, setOpen] = useState(!regionSet);

  const handleClick = () => {
    setRegionSet('germany');
    setOpen(false);
  }

  const dialog = (
    <Dialog open={open} fullScreen transitionDuration={0}>
      <DialogContent>
        <Grid
          container
          flex
          alignItems="center"
          justifyContent="center" 
          sx={{
            minWidth: '100%',
            minHeight: '100%',
          }}
        >
          <Grid item>
            <Grid
              container
              flex
              flexDirection="column"
              gap={8}
              alignItems="center"
            >

              <Logo />

              <Typography variant="h4">Choose Your Region</Typography>

              <Grid container justifyContent="space-around" gap={4}>
                <Grid item>
                  <IconButton onClick={handleClick}>
                    <Iconify width={96} icon="twemoji:flag-austria" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton onClick={handleClick}>
                    <Iconify width={96} icon="twemoji:flag-poland" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton onClick={handleClick}>
                    <Iconify width={96} icon="twemoji:flag-germany" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )

  const content = (
    <Container>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Link href="/1" style={{ textDecoration: 'none' }}>
              <Card item={item} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )

  return regionSet ? content : dialog;
}
