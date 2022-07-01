import { Box, Link } from '@mui/material';

const FooterCompany = () => {
  return (
    <Box>
      <Box>
        <h3>Conpany</h3>
        <hr />
        <Link href="#">
          <p>Seller Registration</p>
        </Link>
        <Link href="#">
          <p>Order Track</p>
        </Link>
      </Box>
      <Box>
        <h3>Legal</h3>
        <hr />
        <Link href="#">
          <p>Privacy & Policy</p>
        </Link>
        <Link href="#">
          <p>Terms & Conditions</p>
        </Link>
        <Link href="#">
          <p>Return & Refunds Policy</p>
        </Link>
      </Box>
    </Box>
  );
};

export default FooterCompany;
