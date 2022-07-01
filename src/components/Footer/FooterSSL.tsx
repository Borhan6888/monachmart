import { Box } from '@mui/material';
//components
import FooterImage from 'Assets/sslcommerz-foo.png';

const FooterSSL = () => {
  return (
    <Box>
      <Box width="100%" component="img" src={FooterImage} alt="Logo" />
    </Box>
  );
};

export default FooterSSL;
