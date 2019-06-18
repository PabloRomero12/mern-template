import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(900 + theme.spacing(3 * 2))]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  footer: {
    marginTop: theme.spacing(8),
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing(6)}px 0`
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <footer className={classNames(classes.footer, classes.layout)}>
      <Grid container spacing={5} justify="space-evenly">
        <Typography>Made by MUSS</Typography>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
