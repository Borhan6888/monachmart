import { Box } from '@mui/material';
import Link from 'next/link';
//logo
import LogoImage from 'Assets/logo.png';

const Logo = () => {
  return (
    <Box>
      <Link href="/">
        <a>
          <Box width="100%" component="img" src={LogoImage} alt="Logo" />
        </a>
      </Link>
    </Box>
  );
};

export default Logo;
