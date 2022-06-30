import { Box } from '@mui/material';
//logo
import LogoImage from 'Assets/logo.png';

const Logo = () => {
  return (
    <Box>
      <Box width="100%" component="img" src={LogoImage} alt="Logo" />
    </Box>
  );
};

export default Logo;
