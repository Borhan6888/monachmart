import { Container, Grid, Box } from '@mui/material';

const FooterUnder = () => {
  return (
    <Container disableGutters maxWidth="xxxl">
      <Grid container spacing={2}>
        <Grid item {...{ md: 6 }}>
          <Box>©2022 All Rights Reserved by Monarch Mart</Box>
        </Grid>
        <Grid item {...{ md: 6 }}>
          <Box>
            Powered by Softavion Ltd. An associate company of Monarch holdings
            Ltd.
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FooterUnder;
