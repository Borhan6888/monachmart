import { Container, Grid, Box, Link } from '@mui/material';
//components
import PaymentCard from 'Assets/SSLCOMMERZ-Pay-With-logo-All-Size_Aug.png';

const FooterPayment = () => {
  return (
    <Container disableGutters maxWidth="xxxl">
      <Grid container spacing={1}>
        <Grid item {...{ md: 5 }}>
          <Link href="#">
            <Box width="100%" component="img" src={PaymentCard} alt="PayLogo" />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FooterPayment;
