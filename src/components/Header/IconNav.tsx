import { Box, List, ListItem, Stack, ButtonBase } from '@mui/material';
import { Icon } from '@iconify/react';

const IconNav = () => {
  return (
    <Box>
      <List component={Stack} direction="row" dense disablePadding>
        <ListItem dense disablePadding disableGutters>
          <Icon icon="ant-design:thunderbolt-filled" />
        </ListItem>
        <ListItem dense disablePadding disableGutters>
          <Icon icon="ant-design:thunderbolt-filled" />
        </ListItem>
        <ListItem dense disablePadding disableGutters>
          <Icon icon="ant-design:thunderbolt-filled" />
        </ListItem>
        <ListItem dense disablePadding disableGutters>
          <ButtonBase>
            <Icon icon="bxs:user-circle" />
            My Account
          </ButtonBase>
        </ListItem>
      </List>
    </Box>
  );
};

export default IconNav;
