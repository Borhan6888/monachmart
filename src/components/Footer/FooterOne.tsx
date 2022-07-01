import { Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

// components

const FooterOne = () => {
  return (
    <Box>
      <Typography variant="h6">CONTACT</Typography>
      <Typography variant="body2">
        Corporate Office: Praasad Trade Center (3rd floor), 6 Kemal Ataturk
        Advance, Banani C/A Dhaka 1213 Registration Office: Rupsha Rower, Flat#
        10/B, Plot#, Road# 17, Banani C/A Dhaka 1213
      </Typography>
      <Box>
        <Icon icon="bi:send" /> support@aleshmart.com
      </Box>
      <Box>
        <Icon icon="fluent:call-32-filled" /> 16731
      </Box>
    </Box>
  );
};

export default FooterOne;
