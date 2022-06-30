import { Container, Box } from '@mui/material';
import Link from 'next/link';

//Layout
import Layout from 'Layout';

const category = () => {
  return (
    <Layout title="Category Page- Monach mart">
      <Container>
        Category
        <Box>
          <Link href="/">
            <a>Go to Home page</a>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};
export default category;
