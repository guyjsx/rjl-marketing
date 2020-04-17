import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import YouTube from 'react-youtube';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-item-nav">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                // className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">News</Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className="app-item-header">
          test
          <video src="/videos/rjl.webm" autoPlay muted loop></video>
        </div>
        <div className="app-item-promo-one">promo one</div>
        <div className="app-item-promo-two">promo two</div>
        <div className="app-item-footer">footer</div>
      </div>
    </div>
  );
}

export default App;
