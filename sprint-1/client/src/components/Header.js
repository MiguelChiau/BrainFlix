import React from "react";
import Logo from "../assets/Logo/Logo-brainflix.png";
import SearchIcon from "../assets/Icons/SVG/Icon-search.svg";
import UploadIcon from "../assets/Icons/SVG/Icon-upload.svg";
import UserProfile from "../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={Logo} alt="" />
      </div>

      <div className="header-search">
        <input type="text" placeholder=" Search" />
        <img src={SearchIcon} alt="" />
      </div>

      <div className="upload">
        <div className="upload-button">
          <button className="upload-button__btn">
            <img src={UploadIcon} alt="" />
            UPLOAD
          </button>
        </div>

        <div className="profile">
          <img src={UserProfile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
