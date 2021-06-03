import React from 'react';
import PropTypes from 'prop-types';

import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useDrawerStyles } from './DrawerStyles';
import theme from '../../core/theme/theme';
import { routes } from '../../routes/router/routes';

export const DrawerNavigation = ({ open, setOpen }) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useDrawerStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {routes.map((route) => (
          <ListItem button key={route.title}>
            <ListItemIcon>
              <Icon>{route.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={route.title} />
          </ListItem>
        ))}
      </List>
      <ListItem button key='logout'>
        <ListItemIcon>
          <Icon>logout</Icon>
        </ListItemIcon>
        <ListItemText primary='Logout' />
      </ListItem>
    </Drawer>
  );
};

DrawerNavigation.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

DrawerNavigation.defaultProps = {
  open: false,
  setOpen: () => {},
};
