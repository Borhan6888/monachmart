import { Container, Grid } from '@mui/material';

//Components
import Logo from 'components/Header/Logo';
import Search from 'components/Header/Search';
import IconNav from 'components/Header/IconNav';
import Nav from 'components/Header/Nav';

const Header = () => {
  return (
    <Container disableGutters maxWidth="xxxl" component="header">
      <Grid container spacing={2}>
        <Grid item {...{ md: 2 }}>
          <Logo />
        </Grid>
        <Grid item {...{ md: 6 }}>
          <Search />
        </Grid>
        <Grid item {...{ md: 4 }}>
          <IconNav />
        </Grid>
      </Grid>
      <Nav />
    </Container>
  );
};

export default Header;
