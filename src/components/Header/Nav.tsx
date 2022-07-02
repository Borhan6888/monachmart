import { Box, List, ListItem, Stack } from '@mui/material';
import Link from 'next/link';

//Data
import NavData from 'Data/Header/Nav.data';

const Nav = () => {
  return (
    <Box component="nav">
      <List component={Stack} dense disablePadding direction="row">
        {NavData &&
          NavData.map((nav, i) => (
            <ListItem key={i} dense disableGutters disablePadding>
              <Link href={nav.url}>
                <a>{nav.name}</a>
              </Link>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Nav;
