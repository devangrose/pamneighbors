import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AboutMenu from './AboutMenu';
import ServicesMenu from './ServicesMenu';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../assets/Logo.png';
import { Link, Redirect } from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  img: {
    height: '65px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: { 
      display: 'flex', 
      flexGrow: 1,
      justifyContent: 'flex-end'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: { display: 'none', },
    justifyContent: 'flex-end',
    width: '100%',
  },
  button: {
    textDecoration: "none",
  }
});

class SimpleAppBar extends React.Component {
  state = {
    servicesOpen: false,
    aboutOpen: false,
    mobileOpen: false,
  };

  toggleServices = () => {
    this.setState({servicesOpen: !this.state.servicesOpen});
  }

  toggleAbout = () => {
    this.setState({aboutOpen: !this.state.aboutOpen});
  }

  handleMobile = () => {
    this.setState({mobileOpen: !this.state.mobileOpen}, () => {console.log(this.state.mobileOpen)});
  }

  render () {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Link to="/">
            <img className={classes.img} src={Logo}/>
            </Link>
            <div className={classes.sectionDesktop}>
              <ServicesMenu 
                isOpen={this.state.servicesOpen} 
                onMouseOut={this.toggleServices}
                aboutIsOpen={this.state.aboutOpen} 
                closeAbout={this.toggleAbout} 
                toggleServices={this.toggleServices} />
              <AboutMenu 
                isOpen={this.state.aboutOpen} 
                servicesIsOpen={this.state.servicesOpen} 
                closeServices={this.toggleServices} 
                toggleAbout={this.toggleAbout} />
              <Link to="/transformations" className={classes.button}><Button>Transformations</Button></Link>
              <Button color="inherit" href="#">Training Opportunities</Button>
              <Link to="/contact" className={classes.button}>
                <Button variant="contained">
                Contact
              </Button>
              </Link>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" color="inherit" onClick={this.handleMobile}>
                <MenuIcon />
              </IconButton>
              <Popper open={this.state.mobileOpen} anchorEl={this.anchorEl} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="menu-list-grow"
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={this.handleClose}>
                  <ServicesMenu 
                    isOpen={this.state.servicesOpen} 
                    onMouseOut={this.toggleServices}
                    aboutIsOpen={this.state.aboutOpen} 
                    closeAbout={this.toggleAbout} 
                    mobile={true}
                    toggleServices={this.toggleServices} />
                  <AboutMenu 
                    isOpen={this.state.aboutOpen} 
                    mobile={true}
                    servicesIsOpen={this.state.servicesOpen} 
                    closeServices={this.toggleServices} 
                    toggleAbout={this.toggleAbout} />
                  <Link to="/transformations" className={classes.button}>Transformations></Link>
                  <Button color="inherit" href="#">Training Opportunities</Button>
                  <Link to="/contact" className={classes.button}>
                    <Button variant="contained">
                    Contact
                  </Button>
                  </Link>
                </ClickAwayListener>
                  </Paper>
                </Grow>
                )}
              </Popper>
            </div>
          </Toolbar> 
        </AppBar>
      </div>
      );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
