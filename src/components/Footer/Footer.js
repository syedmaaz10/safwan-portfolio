import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Powered by Safwan</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} alt="https://www.instagram.com/safwan.__.habib/"/>
          <Facebook color="white" size={"3rem"} alt="https://www.facebook.com/Safwanhabib0/" />
          <Gitub color="white" size={"3rem"} alt="https://github.com/SafwanHabib1"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
