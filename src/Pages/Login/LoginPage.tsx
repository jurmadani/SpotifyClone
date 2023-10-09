import React from "react";
import "./Login.css";
import { SocialIcon } from "react-social-icons";

function LoginPage() {
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
    </div>
  );
}

export default LoginPage;
