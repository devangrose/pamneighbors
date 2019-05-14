import React, { Component } from 'react';
import './App.css';
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Button from "components/CustomButtons/Button.jsx";
// core components
import Footer from './Navigation/Footer.js';
import { Route } from 'react-router-dom';
import { Router } from 'react-router';
import Home from './views/Home/Home.js';
import Service from './views/ServicePage/Service.js';
import Contact from './views/Contact/Contact.js';
import Transformations from './views/Transformations/Transformations.js';
import FAQ from './views/FAQ/FAQ.js';
import Team from './views/Team/Team.js';
import Pricing from './views/Pricing/Pricing.js';
import ScrollToTop from './Components/ScrollToTop.js';
import Training from './views/Training/Training.js';
import Washington from './views/Training/Washington.js';
import Blog from './views/Blog/Blog.js';

import "assets/scss/material-kit-pro-react.css?v=1.2.0";
import services from './assets/serviceInfo.js';

import Header from './Navigation/Header.jsx';
import HeaderLinks from './Navigation/HeaderLinks.jsx';
import Logo from './assets/Logo.png';
import redColor from './color.js';

import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.jsx";
import { withRouter } from "react-router";

// Google Analytics
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
ReactGA.initialize('UA-000000-01');


const tagManagerArgs = {
   gtmId: 'GTM-000000',
   auth: '6sBOnZx1hqPcO01xPOytLK',
   preview: 'env-2'
}

const history = createBrowserHistory();

TagManager.initialize(tagManagerArgs)

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class App extends Component {

  constructor(props){
    super(props);
    this.headerRef = React.createRef();
    this.state = {
      modal: false,
    }
  }

  componentDidMount(){
    this.checkPopup();
    const unlisten = history.listen((location, action) => {
      ReactGA.pageview(window.location);
    });
  }

  handleOpen =() => {
    this.setState({ modal: true});
  }

  handleClose = ()=> {
    this.setState({modal: false});
  }

  checkPopup = () => {
    let date = window.localStorage.getItem('date');
    let timestamp = date;
    if (date) {
      date = new Date();
      var timeDiff = Math.abs(timestamp - date.getTime());
      timeDiff /= 60000;
      if( timeDiff > 60 ) {
        setTimeout(this.handleOpen,1000);
        window.localStorage.setItem('date', date.getTime());
      }
    }
    else {
      let Datetwo = new Date();
      window.localStorage.setItem('date', Datetwo.getTime());
      setTimeout(this.handleOpen,1000);
    }

  }

  render() {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    const { classes } = this.props;
    return (
      <Router history={history}>
        <ScrollToTop>
          <div>
            <Dialog
              classes={{
                root: classes.modalRoot,
                paper: classes.modal
              }}
              open={this.state.modal}
              TransitionComponent={Transition}
              keepMounted
              onClose={this.handleClose}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
              <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
              >
                <Typography className={classes.modalTitle} variant="h6" component="h6" style={{textTransform: 'uppercase', textAlign: 'center', color: redColor}}>Now an approved Tattoo School in the State of Oregon!</Typography>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
              >
                <Typography  variant="h7" component="h7" paragraph align="center">
                  With an emphasis on 
                </Typography>
                <Typography  variant="h7" component="h7" paragraph align="center">
                  permanent cosmetics and scalp micropigmentation.
                </Typography>
                <Typography  variant="h7" component="h7" paragraph align="center">
                  Class registration begins <span style={{color: redColor}}>June 2019.</span>
                </Typography>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
                <Button
                  onClick={() => this.handleClose("liveDemo")}
                  color="secondary"
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>

            <Header
              color="white"
              brand={<img alt="logo" src={Logo} style={{maxWidth: "80%"}}/>}
              rightLinks={<HeaderLinks />}
              ref={this.headerRef}
            />
              <Route exact path="/" component={Home}/>
              { services.map((service, index) => (
                <Route key={index} path={"/service/" + service.url} component={() => (<Service banner={service.banner} dark={service.dark} firstParagraph={service.firstParagraph()} secondParagraph={service.secondParagraph()} category={service.category} steps={service.steps} name={service.name} img={service.img} gender={service.gender} images={service.images}/>)}/>
              ))}
              <Route path="/contact" component={Contact}/>
              <Route path="/transformations" component={Transformations}/>
              <Route path="/faq" component={FAQ}/>
              <Route exact path="/team/:member" component={Team}/>
              <Route exact path="/team" component={Team}/>
              <Route path="/pricing" component={Pricing}/>
              <Route exact path="/training" component={Training}/>
              <Route exact path="/training/washington" component={Washington}/>
              <Route exact path="/blog" component={Blog}/>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default withStyles(modalStyle)(App);
