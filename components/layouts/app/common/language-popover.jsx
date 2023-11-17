'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Iconify from '@/components/iconify'



const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: 'twemoji:flag-united-kingdom',
  },
  {
    value: 'it',
    label: 'Italian',
    icon: 'twemoji:flag-italy',
  },
  {
    value: 'fr',
    label: 'French',
    icon: 'twemoji:flag-france',
  },
];



export default function LanguagePopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <Iconify icon={LANGS[0].icon} />
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === LANGS[0].value}
            onClick={() => handleClose()}
            sx={{
              typography: 'body2',
              py: 1,
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            {/* <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} /> */}
            <Box sx={{ mr: 1.5 }}>
              <Iconify icon={option.icon} />
            </Box>

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
