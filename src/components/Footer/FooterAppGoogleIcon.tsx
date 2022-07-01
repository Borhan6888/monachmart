import { Container, Grid, Box, Link } from '@mui/material';
//component
import GooglePlay from 'Assets/google-play.jpg';
import AppStore from 'Assets/app-store.jpg';

const FooterAppGoogleIcon = () => {
  return (
    <Container disableGutters maxWidth="xxxl">
      <Grid container spacing={1}>
        <Grid item {...{ md: 6 }}>
          <Link href="#">
            <Box
              width="100%"
              component="img"
              src={GooglePlay}
              alt="Google Play"
            />
          </Link>
        </Grid>
        <Grid item {...{ md: 6 }}>
          <Link href="#">
            <Box width="100%" component="img" src={AppStore} alt="App Store" />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FooterAppGoogleIcon;
