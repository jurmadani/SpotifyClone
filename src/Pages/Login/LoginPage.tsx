import React from "react";
import "./Login.css";
import { SocialIcon } from "react-social-icons";
import InfoIcon from "@mui/icons-material/Info";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { HandleSignIn } from "../../controllers/HandleSignIn";
import { Waveform } from "@uiball/loaders";

function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const navigateHook = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [signInError, setSignInError] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  {
    /* email and password states */
  }
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  return (
    <div className="login">
      {/* Social media alert pop-up modal */}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Currently our third-party login via social media is disabled.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* Spotify Logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {/* Black line */}
      <div className="blackLine" />
      {/* Error message */}

      {signInError && (
        <div className="errorBody">
          <InfoIcon />
          <p>Incorrect email or password</p>
        </div>
      )}

      {/* Facebook login */}
      <a onClick={handleClickOpen}>
        <SocialIcon
          network="facebook"
          bgColor="white"
          fgColor="#1877F2"
          style={{ height: 35, width: 35, marginRight: 15 }}
        />
        CONTINUE WITH FACEBOOK
      </a>
      {/* Apple login */}
      <a className="appleAnchor" onClick={handleClickOpen}>
        <img
          src="https://i.pinimg.com/564x/5e/67/1c/5e671cbe6457e88c59d9f82b8270749d.jpg"
          alt=""
          className="appleIcon"
        />
        CONTINUE WITH APPLE
      </a>
      {/* Google login */}
      <a className="googleAnchor" onClick={handleClickOpen}>
        <SocialIcon
          network="google"
          style={{ height: 35, width: 35, marginRight: 15 }}
        />
        CONTINUE WITH GOOGLE
      </a>
      {/* Or line */}
      <div className="orLineDiv">
        <div className="orLine" />
        <h3>OR</h3>
        <div className="orLine" />
      </div>
      {/* Email adress */}
      <TextField
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        error={emailError}
        label="Email adress or username"
        className="emailInput"
        margin="normal"
      />
      {/* Password */}
      <FormControl sx={{ m: 1, width: "30%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          error={passwordError}
          onChange={(event) => setPassword(event.target.value)}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      {/* Forgot your password */}
      <a className="forgotPasswordAnchor">Forgot your password?</a>

      {/* Login anchor */}
      <a
        className="loginButton"
        onClick={async () => {
          if (email === "" || password === "") {
            if (email === "") setEmailError(true);
            if (password === "") setPasswordError(true);
          } else {
            setEmailError(false);
            setPasswordError(false);
            setLoading(true)
            await HandleSignIn(
              email,
              password,
              setSignInError,
              navigateHook,
              setLoading
            );
          }
        }}
      >
        {loading && (
          <Waveform size={30} speed={1} lineWeight={3.5} color="white" />
        )}
        {!loading && <p>LOG IN</p>}
      </a>
      {/* Seperation line */}
      <div className="seperationLine" />
      <h3 style={{ marginTop: 20 }}>Don't have an account?</h3>
      {/* Sign-up anchor */}
      <Link to="/signup" className="signupAnchor">
        <a>SIGN UP FOR SPOTIFY</a>
      </Link>
    </div>
  );
}

export default LoginPage;
