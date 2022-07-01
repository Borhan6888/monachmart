import {
  Box,
  List,
  ListItem,
  Link,
  TextField,
  Stack,
  Typography,
} from '@mui/material';
import { Icon } from '@iconify/react';

const Social = [
  { icon: 'akar-icons:facebook-fill', url: '/' },
  { icon: 'fa-brands:instagram-square', url: '/' },
  { icon: 'entypo-social:youtube-with-circle', url: '/' },
  { icon: 'entypo-social:twitter-with-circle', url: '/' },
  { icon: 'entypo-social:linkedin-with-circle', url: '/' },
];

const FooterFour = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h6">JOIN US</Typography>
      </Box>
      <List component={Stack} direction="row" dense disablePadding>
        {Social &&
          Social.map((item, i) => (
            <ListItem dense disablePadding disableGutters key={i}>
              <Link href={item.url}>
                <a>
                  <Icon icon={item.icon} />
                </a>
              </Link>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default FooterFour;
