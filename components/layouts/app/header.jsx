'use client';

import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from '@/hooks/use-responsive';

import { bgBlur } from '@/theme/css';

import Iconify from '@/components/iconify';

import { NAV, HEADER } from './config-layout';
import LanguagePopover from './common/language-popover';
import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormGroup, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { useState } from 'react';
import { Search } from '@mui/icons-material';

const airports = [
  'Vienna',
  'Innsbruck',
];

const airlines = [
  'Ryanair',
  'Vueling',
];

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = () => { setDialogOpen(true); };
  const handleDialogClose = () => { setDialogOpen(false); };

  const [departuresArray, setDeparturesArray] = useState(airports);
  const [arrivalsArray, setArrivalsArray] = useState(airports);
  const [airlinesArray, setAirlines] = useState(airlines);

  const lgUp = useResponsive('up', 'lg');

  const renderForm = (
    <form autoComplete="off" onSubmit={() => null}>
      <FormGroup sx={{
        display: 'flex',
        gap: 5,
        flexDirection: 'column',
        paddingTop: 2,
        [theme.breakpoints.up('lg')]: {
          flexDirection: 'row',
          paddingTop: 0,
          gap: 2,
          alignItems: 'center'
        },
      }}>
        <FormControl>
          <InputLabel>Departures</InputLabel>
          <Select
            multiple
            size="small"
            sx={{ minHeight: 49, minWidth: 120 }}
            input={<OutlinedInput label="Departures" />}
            value={departuresArray}
            onChange={(event) => {
              const {
                target: { value },
              } = event;
              setDeparturesArray(
                typeof value === 'string' ? value.split(',') : value,
              );
            }}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {airports.map((name) => (
              <MenuItem
                key={name}
                value={name}
                // style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Airlines</InputLabel>
          <Select
            multiple
            size="small"
            sx={{ minHeight: 49, minWidth: 120 }}
            input={<OutlinedInput label="Airlines" />}
            value={airlinesArray}
            onChange={(event) => {
              const {
                target: { value },
              } = event;
              setAirlines(
                typeof value === 'string' ? value.split(',') : value,
              );
            }}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {airlines.map((name) => (
              <MenuItem
                key={name}
                value={name}
                // style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Arrivals</InputLabel>
          <Select
            multiple
            size="small"
            sx={{ minHeight: 49, minWidth: 120 }}
            input={<OutlinedInput label="Arrivals" />}
            value={arrivalsArray}
            onChange={(event) => {
              const {
                target: { value },
              } = event;
              setArrivalsArray(
                typeof value === 'string' ? value.split(',') : value,
              );
            }}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {airports.map((name) => (
              <MenuItem
                key={name}
                value={name}
                // style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <IconButton>
            <Search />
          </IconButton>
        </FormControl>
      </FormGroup>
    </form>
  )

  const renderContent = (
    <>
      <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth>
        <DialogTitle>Filter</DialogTitle>
        <DialogContent sx={{ my: 4 }}>
          {renderForm}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="error">Cancel</Button>
          <Button onClick={handleDialogClose}>Apply</Button>
        </DialogActions>
      </Dialog>
      {!lgUp && (
        <>
          <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
          <IconButton onClick={handleDialogOpen}>
            <Iconify icon="mdi:filter-outline" />
          </IconButton>
        </>
      )}

      {lgUp && renderForm}

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        <LanguagePopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
