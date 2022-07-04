import { Container } from '@mui/material';

//components
import Carousel from 'components/Home/Carousel';
import Category from 'components/Home/Category';

//Layout
import Layout from 'Layout';

const Home = () => {
  return (
    <Layout title="Home Page- Monach mart">
      <Container maxWidth="xxxl" disableGutters sx={{ px: '0' }}>
        <Carousel />
      </Container>
      <Container maxWidth="xxxl" disableGutters>
        <Category />
      </Container>
    </Layout>
  );
};
export default Home;
