import { Box, InputBase, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';

const Search = () => {
  return (
    <Box>
      <InputBase
        endAdornment={
          <InputAdornment position="end">
            <Icon icon="charm:search" />
          </InputAdornment>
        }
      />
    </Box>
  );
};

export default Search;
