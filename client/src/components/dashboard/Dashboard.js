import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { getCurrentProfile } from "../../actions/profileActions";

import { connect } from "react-redux";

const styles = theme => ({
  progress: {
    margin: theme.spacing(2)
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing(8)}px 0 ${theme.spacing(6)}px`
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 100,
    height: 100
  },
  row: {
    display: "flex",
    justifyContent: "center"
  }
});

class Dashboard extends Component {
  componentDidMount = () => {
    this.props.getCurrentProfile();
  };

  render() {
    const { classes } = this.props;
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboarContent;

    if (profile === null || loading === true) {
      dashboarContent = (
        <CircularProgress className={classes.progress} size={50} />
      );
    } else {
      // Check if the logged user has profile data
      if (Object.keys(profile).length > 0) {
        dashboarContent = <h1>TODO: DISPLAY PROFILE</h1>;
      } else {
        dashboarContent = (
          <div>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              component="p"
            >
              You have not created a profile yet, please create a profile.
            </Typography>
            <div className={classes.row}>
              <Button
                component={Link}
                variant="outlined"
                color="primary"
                to="/create-profile"
              >
                Create Profile
              </Button>
            </div>
          </div>
        );
      }
    }

    return (
      <div className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {user.name}
        </Typography>
        <div className={classes.row}>
          <Avatar
            alt={user.name}
            src={user.avatar}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        </div>
        {dashboarContent}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(withStyles(styles)(Dashboard));
