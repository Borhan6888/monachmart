import { Container, Grid, Box } from '@mui/material';
//component
import BarCode from 'Assets/barcode.jpg';
import FooterAppGoogleIcon from './FooterAppGoogleIcon';

const FooterQr = () => {
  return (
    <Container disableGutters maxWidth="xxxl">
      <Grid container spacing={1}>
        <Grid item {...{ md: 12 }}>
          <Box>
            <Box width="100%" component="img" src={BarCode} alt="Logo" />
          </Box>
        </Grid>
      </Grid>
      <FooterAppGoogleIcon />
    </Container>
  );
};

export default FooterQr;
