import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Divider, TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";

import { createUserProfile } from "../../actions/profileActions";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    minWidth: 265
  },
  formControl: {
    margin: theme.spacing(),
    minWidth: 220
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  }
});

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      status: "",
      company: "",
      website: "",
      location: "",
      skills: "",
      bio: "",
      githubusername: "",
      youtube: "",
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
      errors: {}
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSaveProfile = event => {
    event.preventDefault();
    const newProfile = {
      handle: this.state.handle,
      status: this.state.status,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      skills: this.state.skills,
      bio: this.state.bio,
      githubusername: this.state.githubusername,
      youtube: this.setState.youtube,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      instagram: this.state.instagram,
      linkedin: this.state.linkedin
    };

    this.props.createUserProfile(newProfile, this.props.history);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Create Profile
            </Typography>
            <Divider />
            <form className={classes.container} onSubmit={this.onSaveProfile}>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  id="handle"
                  label="Handle"
                  name="handle"
                  value={this.state.handle}
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  required
                  onChange={this.onInputChange}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="status">Status</InputLabel>
                <Select
                  value={this.state.status}
                  onChange={this.onInputChange}
                  inputProps={{
                    name: "status",
                    id: "status"
                  }}
                >
                  <MenuItem value="" disabled>
                    Status
                  </MenuItem>
                  <MenuItem value={"Developer"}>Developer</MenuItem>
                  <MenuItem value={"Unemployed"}>Unemployed</MenuItem>
                  <MenuItem value={"LookingForJob"}>Looking for a Job</MenuItem>
                </Select>
                <FormHelperText>Status</FormHelperText>
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  id="company"
                  label="Company"
                  name="company"
                  value={this.state.company}
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  onChange={this.onInputChange}
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  id="website"
                  label="Website"
                  name="website"
                  value={this.state.website}
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  onChange={this.onInputChange}
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  id="location"
                  label="Location"
                  name="location"
                  value={this.state.location}
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  onChange={this.onInputChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  id="skills"
                  label="Skills"
                  name="skills"
                  value={this.state.skills}
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  required
                  onChange={this.onInputChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  id="bio"
                  label="Biography"
                  name="bio"
                  value={this.state.bio}
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  required
                  multiline
                  onChange={this.onInputChange}
                />
              </FormControl>
              <Divider />
              <FormControl margin="normal">
                <TextField
                  id="githubusername"
                  label="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
              <FormControl margin="normal">
                <TextField
                  id="facebook"
                  label="Facebook"
                  name="facebook"
                  value={this.state.facebook}
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
              <FormControl margin="normal">
                <TextField
                  id="twitter"
                  label="Twitter"
                  name="twitter"
                  value={this.state.twitter}
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
              <FormControl margin="normal">
                <TextField
                  id="youtube"
                  label="YouTube"
                  name="youtube"
                  value={this.state.youtube}
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
              <FormControl margin="normal">
                <TextField
                  id="instagram"
                  label="Instagram"
                  name="instagram"
                  value={this.state.instagram}
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
              <FormControl margin="normal">
                <TextField
                  id="linkedin"
                  label="LinkedIn"
                  name="linkedin"
                  value={this.state.linkedin}
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onInputChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Save
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

CreateProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object,
  auth: PropTypes.object.isRequired,
  createUserProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createUserProfile }
)(withRouter(withStyles(styles)(CreateProfile)));
