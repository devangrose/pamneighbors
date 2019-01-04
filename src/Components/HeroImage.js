import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Parallax from "components/Parallax/Parallax.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { withStyles, withWidth } from '@material-ui/core';

import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";

const styles = {
  ...shoppingCartStyle,
  thumbnail: {
      position: 'relative',
      display: 'inline-block',
      width: "100%",
      overflow: "hidden",
      margin: 'auto',
  },
  captionMen: {
    margin: '50%', 
    padding: '0% 10%', 
    textAlign: 'left', 
    display: 'table-cell', 
    verticalAlign: 'middle',
    color: 'white',
  },
  captionWomen: {
    margin: '50%', 
    padding: '0% 10%', 
    textAlign: 'right', 
    display: 'table-cell', 
    verticalAlign: 'middle',
  },
  titleText: {
    textTransform: 'uppercase',
    paddingRight: '5%',
    width: '100%',
  }
};
class HeroImage extends Component {
	render(props) {
    const { classes } = this.props;
    const color = 'black';
    return (
      <div style={{width: "100%", height: "33vw", backgroundImage:`url(${this.props.source})`, backgroundSize: 'cover', display: 'table'}}>
        <div className={classes.container} style={{display: 'table-cell', verticalAlign: 'middle'}}>
            <GridContainer>
              <GridItem
                sm={12}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                )}
              >
                {
                  ['lg','xl'].includes(this.props.width) ?
                <Typography className={classes.titleText} style={{color: color}} variant={['lg','xl'].includes(this.props.width) ? "h3" : 'h5'} align="right">{this.props.overlay.replace('-_','-').replace('_',' ')}</Typography>
                  :
                    this.props.overlay.split('_').map(text => {
                      text = text.replace('-','');
                      text = text.replace('_',' ');
                      return (
                        <Typography className={classes.titleText} style={{color: color}} variant={['lg','xl'].includes(this.props.width) ? "h3" : 'h5'} align="right">{text}</Typography>
                      )
                    })
                }
              </GridItem>
            </GridContainer>
          </div>
        </div>
  )}
}

export default withStyles(styles)(withWidth()(HeroImage))
