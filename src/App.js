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
import { BrowserRouter as Router, 
       Route
      } from 'react-router-dom';
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

// Google Analytics
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
   gtmId: 'GTM-000000',
   auth: '6sBOnZx1hqPcO01xPOytLK',
   preview: 'env-2'
}

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
    console.log(timestamp);
    if (date) {
      date = new Date();
      console.log(date.getTime());
      var timeDiff = Math.abs(timestamp - date.getTime());
      timeDiff /= 60000;
      if( timeDiff > 60 ) {
        console.log('show popup!');
        setTimeout(this.handleOpen,1000);
        window.localStorage.setItem('date', date.getTime());
      }
    }
    else {
      let Datetwo = new Date();
      window.localStorage.setItem('date', Datetwo.getTime());
      console.log("Set", window.localStorage.getItem('date'));
      setTimeout(this.handleOpen,1000);
    }

  }
  render() {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    const { classes } = this.props;
    return (
      <Router>
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
                <Typography className={classes.modalTitle} variant="h6" component="h6" style={{textTransform: 'uppercase', textAlign: 'center', color: redColor}}>Opening February 2019 In Oregon!</Typography>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
              >
                <Typography  variant="p" component="p" paragraph>
                  Email us <a href="mailto:pam@trilliumink.net" style={{textDecoration: "none", '&:visited':{color: 'blue', margin: '1%'}}}><Typography variant="p" component="p" style={{color: 'blue', display: 'inline'}}>here</Typography></a> to receive an invitation to our grand opening and upcoming specials.
                </Typography>
                <Typography  variant="p" component="p">If you can't wait, <a href="tel:425-258-6256" style={{textDecoration: "none", '&:visited':{color: 'blue'}}}><Typography variant="p" component="p" style={{color: 'blue', display: 'inline'}}>call</Typography></a> our Everett, WA office and schedule a consultation today.</Typography>
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
