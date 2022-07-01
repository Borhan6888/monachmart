import { Box, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';

const data = [
  { title: 'Payment', url: '/' },
  { title: 'Cancellation & Returns', url: '/' },
  { title: 'About Premium Membership', url: '/' },
  { title: 'About Alesha Bidding', url: '/' },
  { title: 'Easy Ordering', url: '/' },
  { title: 'Terms and Condition', url: '/' },
  { title: 'Privacy Policy', url: '/' },
  { title: 'Help Center', url: '/' },
];

const FooterThree = () => {
  return (
    <Box>
      <Typography variant="h6">HELP</Typography>
      <List>
        {data &&
          data.map((item, i) => (
            <ListItem key={i}>
              <Link href={item.url}>
                <a>{item.title}</a>
              </Link>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default FooterThree;
