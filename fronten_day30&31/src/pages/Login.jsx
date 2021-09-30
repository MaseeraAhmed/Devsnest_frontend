import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { NavLink } from "react-router-dom";
import image from "../assets/images/image.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "center",
    height: "100vh",
    overflow: "hidden",
  },
  image: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // paddingLeft: "50rem",
  },
  paper: {
    margin: theme.spacing(2, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const [logger, setLogger] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();

  const togglePopup = () => {
    setLogger(!logger);
  };

  return (
    <>
      {logger && email && password ? (
        <Alert
          iconMapping={{
            success: <CheckCircleOutlineRoundedIcon fontSize="inherit" />,
          }}
        >
          Successfully logged in!
        </Alert>
      ) : (
        logger && <Alert severity="error">Please fill information</Alert>
      )}

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={4} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
              Login / Sign in
            </Typography>
            <h3 style={{ opacity: 0.8 }}>
              for Latest trends, exciting offers and everything RTT!
            </h3>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={() => {
                  setEmail(true);
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(true);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={togglePopup}
              >
                Login In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <NavLink to="signup" variant="body2">
                    Don't have an account? Sign Up
                  </NavLink>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={8} className={classes.image} />
      </Grid>
    </>
  );
}
