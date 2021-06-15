import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { DrawerNavigation } from '../Drawer/Drawer';
import { useHeaderStyles } from './HeaderStyles';

export const Header = () => {
  const classes = useHeaderStyles();
  const [drawerOpened, setDrawerOpened] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpened(true);
  };

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar color='primary'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.titleWrapper}>
            <DirectionsCarIcon />

            <Typography className={classes.title} variant='h6' noWrap>
              Supersportwagen
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            {/* TODO: FILTER VEHICLES BY NAME */}
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <IconButton
              onClick={() => {
                console.log('clicked');
              }}
              edge='end'
              color='inherit'
            >
              <div className={classes.rightSectionIconContainer}>
                <MonetizationOnIcon />
                <Typography className={classes.iconBottomText}>
                  My Credits
                </Typography>
              </div>
            </IconButton>
            <IconButton
              onClick={() => {
                console.log('clicked');
              }}
              edge='end'
              color='inherit'
            >
              <div className={classes.rightSectionIconContainer}>
                <AccountCircle />
                <Typography className={classes.iconBottomText}>
                  Account
                </Typography>
              </div>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <DrawerNavigation open={drawerOpened} setOpen={setDrawerOpened} />
    </div>
  );
};
