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
  }
};
class HeroImage extends Component {
	render(props) {
    const { classes } = this.props;
    return (
        <Parallax
          image={this.props.source}
          filter="dark"
          small
          style={{zIndex: -10}}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h2 className={classes.title}>{this.props.overlay}</h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
  )}
}

export default withStyles(styles)(HeroImage);
