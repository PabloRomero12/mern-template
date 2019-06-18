import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing(3)
  }
});

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form className={classes.form} onSubmit={this.onSubmit}>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  required
                  autoComplete="name"
                  value={this.state.name}
                  autoFocus
                  onChange={this.onInputChange}
                  error={errors.name ? true : false}
                  helperText={errors.name ? this.state.errors.name : ""}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  id="email"
                  name="email"
                  autoComplete="email"
                  label="Email"
                  required
                  value={this.state.email}
                  onChange={this.onInputChange}
                  error={errors.email ? true : false}
                  helperText={errors.email ? this.state.errors.email : ""}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  name="password"
                  type="password"
                  id="password"
                  label="Password"
                  required
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                  error={errors.password ? true : false}
                  helperText={errors.password ? this.state.errors.password : ""}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  name="password2"
                  type="password"
                  id="password2"
                  label="Confirm Password"
                  required
                  autoComplete="current-password"
                  value={this.state.password2}
                  onChange={this.onInputChange}
                  error={errors.password2 ? true : false}
                  helperText={
                    errors.password2 ? this.state.errors.password2 : ""
                  }
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(withStyles(styles)(Register)));
