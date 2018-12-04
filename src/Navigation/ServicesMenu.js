import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import redColor from '../color.js';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: '50'
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  link: {
    textDecoration: 'none',
    color: '#000000',
    width: "100%",
    height: "100%",
  },
});

class ServicesMenu extends React.Component {


  handleOpen = () => {
    if(this.props.aboutIsOpen) {
      this.props.closeAbout();
    }
    if(!this.props.isOpen) {
      this.props.toggleServices();
    }
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.props.toggleServices();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={this.props.isOpen ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onMouseOver={this.handleOpen}
          >
            Services
          </Button>
          <Popper open={this.props.isOpen} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                  <Grid container spacing={24} style={{paddingRight: "10px"}}>
                    <Grid item sm={12} md={6}>
                    <MenuList>
                      <Typography variant="h6" style={{paddingLeft: "15px", color: redColor}}>
                        Men
                      </Typography>
                      <hr style={{width: "80%"}}/>
                      <MenuItem onClick={this.handleClose}><Link to="/service/men/hair-loss-treatment" className={classes.link} style={{width: "100%", height: "100%"}}>Hair Loss Treatment</Link></MenuItem>
                      <MenuItem onClick={this.handleClose}><Link to="/service/men/alopecia" className={classes.link} style={{width: "100%", height: "100%"}}>Alopecia</Link></MenuItem>
                      <MenuItem onClick={this.handleClose}><Link to="/service/men/transplant-scars" className={classes.link} style={{width: "100%", height: "100%"}}>Transplant Scars</Link></MenuItem>
                      <Typography variant="h6" style={{paddingLeft: "15px", color: redColor}}>
                        Women
                      </Typography>
                      <hr style={{width: "80%"}}/>
                      <MenuItem onClick={this.handleClose}><Link to="/service/women/hair-loss-treatment" className={classes.link} style={{width: "100%", height: "100%"}}>Hair Loss Treatment</Link></MenuItem>
                      <MenuItem onClick={this.handleClose}><Link to="/service/women/alopecia" className={classes.link} style={{width: "100%", height: "100%"}}>Alopecia</Link></MenuItem>
                    </MenuList> 
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <MenuList style={{paddingRight: "10px"}}>
                        <MenuItem onClick={this.handleClose}><Link to="/service/women/eyebrows" className={classes.link}>Eyebrows</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link to="/service/women/3d-eyebrows" className={classes.link}>3D Hair Stroke Eyebrows</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link to="/service/women/eyeliner" className={classes.link}>Eyeliner</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link to="/service/women/lips" className={classes.link}>Lips</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link to="/service/women/microneedling" className={classes.link}>Microneedling</Link></MenuItem>
                    </MenuList>
                    </Grid>
                    </Grid>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

ServicesMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesMenu);
