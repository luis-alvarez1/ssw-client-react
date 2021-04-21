import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { DrawerNavigation } from '../Drawer/Drawer';
import { useHeaderStyles } from './HeaderStyles';

export const Header = (props) => {
  const classes = useHeaderStyles();
  const [drawerOpened, setDrawerOpened] = useState(true);

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
                alert('clicked');
              }}
              edge='end'
              color='inherit'
            >
              <MonetizationOnIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                alert('clicked');
              }}
              edge='end'
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <DrawerNavigation open={drawerOpened} setOpen={setDrawerOpened} />
    </div>
  );
};
