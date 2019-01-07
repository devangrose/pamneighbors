import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import emailjs from 'emailjs-com';

const styles = theme => ({
  container: {
    alignItems: 'center',
    padding: '3rem',
    marginTop: '20%',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    marginLeft: '25%',
    width: "50%",
  }
});

class QuoteForm extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit= (event)=> {
    event.preventDefault();
    console.log(this.state.name, this.state.phone, this.state.email, this.state.message)
    
    window.emailjs.send("mailgun_test", "pam", {"senderEmail":this.state.email,"senderName":this.state.name,"senderPhone":this.state.phone,"senderMessage":this.state.message,"ejs_dashboard__test_template":true})
      .then(response => {
        console.log(response);
      });
  } 

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit}>
        <Typography className={classes.text} component="h2" variant="display1" align="center" gutterBottom>
          GET A FREE QUOTE
        </Typography>
        <Typography className={classes.text} component="h2" variant="headline" align="center" gutterBottom>
          Contact us today!
        </Typography>
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="component-filled1">Name</InputLabel>
          <FilledInput name="name" id="component-filled1" value={this.state.name} onChange={this.handleChange} />
        </FormControl>
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="component-filled2">Phone</InputLabel>
          <FilledInput name="phone" id="component-filled2" fullWidth value={this.state.phone} onChange={this.handleChange}/>
        </FormControl> 
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="component-filled3">Email</InputLabel>
          <FilledInput name="email" id="component-filled3" value={this.state.email} onChange={this.handleChange}/>
        </FormControl>
        <FormControl className={classes.formControl} variant="filled">
          <InputLabel htmlFor="component-filled4">Message</InputLabel>
          <FilledInput name="message" id="component-filled4" value={this.state.message} onChange={this.handleChange}/>
        </FormControl>
        <div>
          <Button variant="contained" type="submit" className={classes.button}>
            Submit
          </Button>
        </div>
        <Typography className={classes.text} variant="caption" align="center" gutterBottom>
          *A representative from Trillium Ink will contact you shortly.
        </Typography>
      </form>
      </div>
    );
  }
}

QuoteForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuoteForm);
