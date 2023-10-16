import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="body">
      <div className="footerBody">
        <img
          className="spotifyLogo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <div className="list">
          <h5 style={{ color: "#919496" }}>COMPANY</h5>
          <p>About</p>
          <p>Jobs</p>
          <p>For the Record</p>
        </div>
        <div className="list">
          <h5 style={{ color: "#919496" }}>COMMUNITIES</h5>
          <p>For Artists</p>
          <p>Developers</p>
          <p>Advertising</p>
          <p>Investors</p>
          <p>Vendors</p>
        </div>
        <div className="list">
          <h5 style={{ color: "#919496" }}>USEFUL LINKS</h5>
          <p>Support</p>
          <p>Web Player</p>
          <p>Free Mobile App</p>
        </div>
        <div className="socialMediaBody">
          <SocialIcon
            network="instagram"
            bgColor="#222326"
            className="socialIcon"
          />
          <SocialIcon
            network="twitter"
            bgColor="#222326"
            className="socialIcon"
          />
          <SocialIcon
            network="facebook"
            bgColor="#222326"
            className="socialIcon"
          />
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: "20px", color: "#919496" }}>
        This is a spotify clone, most of the anchors & links are just for UI
        purposes.
      </p>
    </div>
  );
}
