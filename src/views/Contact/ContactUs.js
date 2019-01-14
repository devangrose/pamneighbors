import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

import redColor from 'color.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 10,
  },
  text: {
    marginBottom: '4rem'
  }
});

class ContactUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Your name',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
      success: 'none',
      error: 'none',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
     var service_id = "mailgun_test";
    var template_id = "pam_images";


    const data = new FormData(e.target);
    window.emailjs.sendForm(service_id,template_id,document.getElementById('formId')
    )
      .then(response => {
        this.setState({ success: 'block' });
        console.log(response);
      })
      .catch(response => {
        this.setState({ error: 'block' });
        console.log(response);
      })
  }
  render(){
    return (
      <div style={{marginTop: "50px"}} >
        <Grid container spacing={40} style={{margin: "auto", maxWidth: "80%"}}>
          <Grid item md={6} sm={12}>
            <Paper>
            <div style={{padding: "25px", backgroundColor: "#e0e0e0"}}>
            <Typography variant="h3">
              Send Us A Message!
            </Typography>
            <Typography className={classes.success} style={{display: this.state.success}} component="h2" variant="headline" align="left" gutterBottom>
              Message sent successfully 
            </Typography>
            <Typography className={classes.error} style={{display: this.state.error}} component="h2" variant="headline" align="left" gutterBottom>
              An error has occured
            </Typography>
            <form id="formId"noValidate autoComplete="off" style={{width: "100%"}} onSubmit={this.handleSubmit}>
              <TextField
                id="outlined-with-placeholder"
                name="senderName"
                label="Name"
                placeholder="Your name"
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                style={{width:"100%"}}
              />
              <br/>
              <TextField
                id="outlined-with-placeholder"
                label="Phone"
                name="senderPhone"
                placeholder="Your Phone Number"
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                style={{width:"100%"}}
              />
              <br/>
              <TextField
                id="outlined-with-placeholder"
                label="Email"
                name="senderEmail"
                placeholder="Your email"
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                style={{width:"100%"}}
              />
              <br/>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows="4"
                name="senderMessage"
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                style={{width:"100%"}}
              />
              <br/>
              <Button variant="outlined">
                 <input id="image1" type="file" name="image1" style={{cursor: 'pointer',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    right: '0',
                    left: '0',
                    width: '100%',
                    opacity: '0'}} />
                  Upload Image
              </Button>
              <Button variant="outlined">
                 <input id="image2" type="file" name="image2" style={{cursor: 'pointer',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    right: '0',
                    left: '0',
                    width: '100%',
                    opacity: '0'}} />
                  Upload Image
              </Button>
              <Button variant="outlined">
                 <input id="image3" type="file" name="image3" style={{cursor: 'pointer',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    right: '0',
                    left: '0',
                    width: '100%',
                    opacity: '0'}} />
                  Upload Image
              </Button>
              <br/>
              <br/>
              <Button variant="outlined" type="submit" style={{width: "50%"}}>Submit</Button>
            </form>
          </div>
          </Paper>
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography variant="h3" style={{color: redColor}}>Have questions? We’ve got answers!</Typography>
            <br/>
            <Typography variant="h4">Send us a message and we’ll get back to you with the information you’re looking for.</Typography>
            <br/>
            <Typography variant="h4">... or check out our <Link to="/faq" style={{color: redColor, textDecoration: "underline"}}>FAQ page</Link> to find out more about our services.</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ContactUs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactUs);
