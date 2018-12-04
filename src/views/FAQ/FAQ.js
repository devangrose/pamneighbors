import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QA from './QA.js';
import HeroImage from '../../Components/HeroImage';
import { Paper } from '@material-ui/core';

import headerPhoto from "../../assets/slider-item-2-1.jpg"

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});


function FAQ(props) {
  return (
    <div>
      <HeroImage source={ headerPhoto } overlay="Frequently Asked Questions" gender="woman"/>
      <Paper style={{ margin: "0px", paddingTop: "0px", padding: "5%", background: "linear-gradient(#e0e0e0, #CECECE)" }} >
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={6}>
            <QA question="How long does it take?" answer="Depending upon the amount of hair loss each treatment will take 2-4 hour. 2-4 sesions are necessary and are scheduled a week apart."/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <QA question="Will the pigment turn blue over time?" answer="The main reason pigments turn blue is because they are implanted too deep in the skin. Good quality pigments and proper application assure optimal results."/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <QA question="How painful is it?" answer="Many clients will compare this to a body art tattoo. Since the pigment is implanted so shallow in the skin it is not nearly as painful as would be expected. Most clients say the pain level is only a 3 or 4 on a scale of 1-10."/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <QA question="How much downtime will I have?" answer="This is a minimally invasive process. Some fair-skinned clients will have pinkness of the scalp for a few days while others will barely notice anything at all. Most clients can go back to work the next day."/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <QA question="Does it look real?" answer="Expertly applied impressions give the look of real hair stubble. Even up close and personal quality scalp micropigmentation is undetectable."/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <QA question="How much does it cost?" answer="Price varies based on the amount of coverage needed. We refer to the Norwood balding chart to price out treatments. The average client will spend between $2000 and $4000."/>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}


FAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ)
