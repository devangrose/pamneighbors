/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Typography } from '@material-ui/core';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "./CustomDropdown.jsx";
import Button from "./Button.jsx";
import { Button  as Button2 } from '@material-ui/core';
import headerLinksStyle from "./headerLinksStyle.jsx";

import redColor from '../color.js';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Typography variant="h6" style={{color: redColor}}>
              Men
            </Typography>,
            <hr style={{maxWidth: "80%"}}/>,
            <Link to="/service/men/hair-loss-treatment" className={classes.dropdownLink}>
              Hair Loss Treatment
            </Link>,
            <Link to="/service/men/alopecia" className={classes.dropdownLink}>
              Alopecia
            </Link>,
            <Link to="/service/men/transplant-scars" className={classes.dropdownLink}>
              Scalp Scars
            </Link>,
            <Typography variant="h6" style={{color: redColor}}>
              Women
            </Typography>,
            <hr style={{maxWidth: "80%"}}/>,
            <Link to="/service/women/hair-loss-treatment" className={classes.dropdownLink}>
              Hair Loss Treatment
            </Link>,
            <Link to="/service/women/alopecia" className={classes.dropdownLink}>
              Alopecia
            </Link>,
            <Link to="/service/women/eyebrows" className={classes.dropdownLink}>
              Eyebrows
            </Link>,
            <Link to="/service/women/eyeliner" className={classes.dropdownLink}>
              Eyeliner
            </Link>,
            <Link to="/service/women/lips" className={classes.dropdownLink}>
              Lips
            </Link>,
            <Link to="/service/women/microneedling" className={classes.dropdownLink}>
              Microneedling
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/team" className={classes.dropdownLink}>
              Our Team
            </Link>,
            <Link to="/pricing" className={classes.dropdownLink}>
              Pricing
            </Link>,
            <Link to="/blog" className={classes.dropdownLink}>
              Blog
            </Link>,
            <Link to="/faq" className={classes.dropdownLink}>
              FAQs
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link 
          to = "/transformations"
          className={classes.navLink}
        >
          Transformations
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Training"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link 
              to = "/training"
              className={classes.navLink}
            >
              Scalp Training Opportunities
            </Link>
            ,
            <a 
              className={classes.navLink}
              href="https://inkbypam.clickfunnels.com/student-training"
            >
              Scalp Academy Training Orientation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contact" className={classes.navLink}>
          <Button2 variant="contained">
            Contact Us
          </Button2>
        </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
