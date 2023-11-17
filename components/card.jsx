import PropTypes from 'prop-types';

import {
  Box,
  Card as MuiCard,
  Stack,
  Typography
} from '@mui/material';

import { fCurrency } from '@/utils/numbers';

export default function Card({ item }) {
  const renderImg = (
    <Box
      component="img"
      alt={item.title}
      src={item.cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      from {fCurrency(item.price)}
    </Typography>
  );

  return (
    <MuiCard sx={{
      '&:hover': {
        boxShadow: 'none',
      },
    }}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="subtitle2" noWrap>
          {item.title}
        </Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {renderPrice}
        </Stack>
      </Stack>
    </MuiCard>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};
