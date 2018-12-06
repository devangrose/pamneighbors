import React, { Component } from 'react';
import './App.css';
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

import "assets/scss/material-kit-pro-react.css?v=1.2.0";
import services from './assets/serviceInfo.js';

import Header from './Navigation/Header.jsx';
import HeaderLinks from './Navigation/HeaderLinks.jsx';
import Logo from './assets/Logo.png';

class App extends Component {

  constructor(props){
    super(props);
    this.headerRef = React.createRef();
  }
  render() {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Header
              color="white"
              brand={<img alt="logo" src={Logo} style={{maxWidth: "80%"}}/>}
              rightLinks={<HeaderLinks />}
              ref={this.headerRef}
            />
              <Route exact path="/" component={Home}/>
              { services.map((service, index) => (
                <Route key={index} path={"/service/" + service.url} component={() => (<Service banner={service.banner} firstParagraph={service.firstParagraph()} secondParagraph={service.secondParagraph()} category={service.category} steps={service.steps} name={service.name} img={service.img} gender={service.gender} images={service.images}/>)}/>
              ))}
              <Route path="/contact" component={Contact}/>
              <Route path="/transformations" component={Transformations}/>
              <Route path="/faq" component={FAQ}/>
              <Route exact path="/team/:member" component={Team}/>
              <Route exact path="/team" component={Team}/>
              <Route path="/pricing" component={Pricing}/>
              <Route exact path="/training" component={Training}/>
              <Route exact path="/training/washington" component={Washington}/>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
