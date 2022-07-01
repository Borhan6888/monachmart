import { Box, List, ListItem, Stack, Link } from '@mui/material';
import { Icon } from '@iconify/react';
import PayWith from './PayWith';

const FooterSocial = () => {
  return (
    <Box>
      <Box>
        <h2>Follow Us</h2>
        <hr />
      </Box>
      <List component={Stack} direction="row" dense disablePadding>
        <ListItem dense disablePadding disableGutters>
          <Link href="#">
            <Icon icon="akar-icons:facebook-fill" />
          </Link>
        </ListItem>
        <ListItem dense disablePadding disableGutters>
          <Link href="#">
            <Icon icon="entypo-social:twitter-with-circle" />
          </Link>
        </ListItem>
        <ListItem dense disablePadding disableGutters>
          <Link href="#">
            <Icon icon="fa-brands:instagram-square" />
          </Link>
        </ListItem>
        <ListItem dense disablePadding disableGutters>
          <Link href="#">
            <Icon icon="entypo-social:youtube-with-circle" />
          </Link>
        </ListItem>
        <ListItem dense disablePadding disableGutters>
          <Link href="#">
            <Icon icon="entypo-social:linkedin-with-circle" />
          </Link>
        </ListItem>
      </List>
      <PayWith />
    </Box>
  );
};

export default FooterSocial;
