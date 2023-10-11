import React from "react";
import "./Login.css";
import { SocialIcon } from "react-social-icons";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="login">
      {/* Spotify Logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {/* Black line */}
      <div className="blackLine" />
      {/* Facebook login */}
      <a>
        <SocialIcon
          network="facebook"
          bgColor="white"
          fgColor="#1877F2"
          style={{ height: 35, width: 35, marginRight: 15 }}
        />
        CONTINUE WITH FACEBOOK
      </a>
      {/* Apple login */}
      <a className="appleAnchor">
        <img
          src="https://i.pinimg.com/564x/5e/67/1c/5e671cbe6457e88c59d9f82b8270749d.jpg"
          alt=""
          className="appleIcon"
        />
        CONTINUE WITH APPLE
      </a>
      {/* Google login */}
      <a className="googleAnchor">
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
        label="Email adress or username"
        className="emailInput"
        margin="normal"
      />
      {/* Password */}
      <FormControl sx={{ m: 1, width: "30%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
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
      <a className="loginButton">LOG IN</a>
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
