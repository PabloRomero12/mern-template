import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearProfile } from "../../actions/profileActions";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  avatar: {
    margin: 10
  }
};

class Header extends Component {
  onLogoutUser = () => {
    this.props.logoutUser();
    this.props.clearProfile();
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    const { isAuthenticated, user } = this.props.auth;

    const guestLinks = (
      <div>
        <Button component={Link} color="inherit" raised="true" to="/login">
          Login
        </Button>
        <Button component={Link} color="inherit" raised="true" to="/register">
          Register
        </Button>
      </div>
    );

    const authLinks = (
      <div>
        <Button component={Link} color="inherit" raised="true" to="/dashboard">
          Dashboard
        </Button>

        <Button color="inherit" raised="true" onClick={this.onLogoutUser}>
          Logout
        </Button>
        <IconButton color="inherit">
          <Avatar alt={user.name} src={user.avatar} />
        </IconButton>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.grow}>
              <Button
                component={Link}
                color="inherit"
                raised="true"
                to="/"
                size="large"
              >
                MERN STACK
              </Button>
            </div>
            {isAuthenticated ? authLinks : guestLinks}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearProfile }
)(withRouter(withStyles(styles)(Header)));
