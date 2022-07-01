import { Container, Grid } from '@mui/material';
import FooterFour from 'components/Footer/FooterFour';
//components
import FooterOne from 'components/Footer/FooterOne';
import FooterSSL from 'components/Footer/FooterSSL';
import FooterThree from 'components/Footer/FooterThree';
import FooterTwo from 'components/Footer/FooterTwo';

const Footer = () => {
  return (
    <Container disableGutters maxWidth="xxxl">
      <Grid container spacing={3}>
        <Grid item {...{ md: 3 }}>
          <FooterOne />
        </Grid>
        <Grid item {...{ md: 2 }}>
          <FooterTwo />
        </Grid>
        <Grid item {...{ md: 3 }}>
          <FooterThree />
        </Grid>
        <Grid item {...{ md: 4 }}>
          <FooterFour />
        </Grid>
        <FooterSSL />
      </Grid>
    </Container>
  );
};

export default Footer;
