import { Container, Grid } from '@mui/material';
//components
import FooterCompany from 'components/Footer/FooterCompany';
import FooterCustomer from 'components/Footer/FooterCustomer';
import FooterPayment from 'components/Footer/FooterPayment';
import FooterQr from 'components/Footer/FooterQr';
import FooterSocial from 'components/Footer/FooterSocial';
import FooterUnder from 'components/Footer/FooterUnder';
import FootherLogo from 'components/Footer/FootherLogo';

const Footer = () => {
  return (
    <Container disableGutters maxWidth="xxxl">
      <Grid container spacing={3}>
        <Grid item {...{ md: 3 }}>
          <FootherLogo />
          <FooterSocial />
        </Grid>
        <Grid item {...{ md: 2 }}>
          <FooterCompany />
        </Grid>
        <Grid item {...{ md: 3 }}>
          <FooterCustomer />
        </Grid>
        <Grid item {...{ md: 4 }}>
          <FooterQr />
        </Grid>
      </Grid>
      <FooterPayment />
      <FooterUnder />
    </Container>
  );
};

export default Footer;
