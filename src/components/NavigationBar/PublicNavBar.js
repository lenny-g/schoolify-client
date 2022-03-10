import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "blue",
    },
  },
}));

export const PublicNavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          SCHOOLIFY
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
          <Link to="/sign-up" className={classes.link}>
            Sign Up
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
