import React from "react";
import "./Header.css";
import {
  FiHelpCircle,
  FiLogOut,
  FiMenu,
  FiSearch,
  FiSettings,
} from "react-icons/fi";
import { GrApps } from "react-icons/gr";
import Avatar from "@mui/material/Avatar";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header_container">
      <div className="left_side">
        <FiMenu className="Icons" />
        <img
          src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="logo"
        />
      </div>
      <div className="mid_side">
        <FiSearch className="Icons" />
        <input type="text" placeholder="Search mail" />
      </div>
      <div className="right_side">
        <FiLogOut className="Icons_right" onClick={signOut} />
        <FiHelpCircle className="Icons_right" />
        <FiSettings className="Icons_right" />
        <GrApps className="Icons_right" />
        <Avatar alt={user?.displayName} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
