import { Container, Grid, Box, Link } from '@mui/material';
//component
import PayLogo from 'Assets/pay-with-logo.png';

const PayWith = () => {
  return (
    <Container disableGutters maxWidth="xxxl">
      <Grid container spacing={1}>
        <Grid item {...{ md: 12 }}>
          <Link href="#">
            <Box width="100%" component="img" src={PayLogo} alt="PayLogo" />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PayWith;
