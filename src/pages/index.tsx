import { Container, Box } from '@mui/material';
import Link from 'next/link';

//Layout
import Layout from 'Layout';

const Home = () => {
  return (
    <Layout title="Home Page- Monach mart">
      <Container>
        Home
        <Box>
          <Link href="/category">
            <a>Go to category page</a>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};
export default Home;
