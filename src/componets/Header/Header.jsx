import React from 'react';
import s from './Header.module.css'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import  useStyles from './styles'


const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={s.header}>
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              React Test
          </Typography>
            <div>
              {props.isAuth ?
                <div>
                  <Button size="small" variant="outlined">{props.login} </Button>
                  <Button size="small" variant="outlined" onClick={props.logoutThunk} >Logout </Button>
                </div>
                  :
                <NavLink to='/login'><Button variant="outlined">
                  Login </Button></NavLink>}
            </div>
        </Toolbar>
      </AppBar>
      </div>
    </div>
  );
}

export default Header;