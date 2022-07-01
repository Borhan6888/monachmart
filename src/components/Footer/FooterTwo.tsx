import { Box, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';

const data = [
  { title: 'About Aleshmart', url: '/' },
  { title: 'My Account', url: '/' },
  { title: 'Aleshmart Marchant', url: '/' },
  { title: 'Career', url: '/' },
];

const FooterTwo = () => {
  return (
    <Box>
      <Typography variant="h6">QUICK LINKS</Typography>
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

export default FooterTwo;
