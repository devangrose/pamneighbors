import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Parallax from "components/Parallax/Parallax.jsx";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { withStyles } from '@material-ui/core';

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
  }
};
class HeroImage extends Component {
	render(props) {
    const { classes } = this.props;
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
                { this.props.dark ==true ? 
                <Typography className={classes.titleText} style={{color: 'black'}} variant="h4" align="right">{this.props.overlay}</Typography>
                  :
                <Typography className={classes.titleText} style={{color: 'white'}} color="white" variant="h4" align="right">{this.props.overlay}</Typography>
                }
              </GridItem>
            </GridContainer>
          </div>
        </div>
  )}
}

export default withStyles(styles)(HeroImage);
