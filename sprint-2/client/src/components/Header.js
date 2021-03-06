import React from "react";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import SearchIcon from "../assets/Icons/SVG/Icon-search.svg";
import UploadIcon from "../assets/Icons/SVG/Icon-upload.svg";
import UserProfile from "../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="header-container__logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className="header-search">
        <i className="header-search__icon">
          <img src={SearchIcon} alt="" />
        </i>
        <input
          className="header-search__text"
          type="text"
          placeholder=" Search"
        />
      </div>

      <div className="upload">
        <div className="upload-button">
          <Link to="/upload">
            <button className="upload-button__btn">
              <img src={UploadIcon} alt="" />
              UPLOAD
            </button>
          </Link>
        </div>

        <div className="profile">
          <img src={UserProfile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
