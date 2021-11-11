import React from "react";
import "./Sidebar.css";
import { HiClock, HiInbox, HiStar } from "react-icons/hi";
import {
  AiOutlineDown,
  AiOutlineMore,
  AiOutlinePlus,
  AiOutlineSend,
} from "react-icons/ai";
import { IoIosDocument } from "react-icons/io";
import { MdKeyboard, MdVideoCall } from "react-icons/md";
import { OpenSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebarContainer">
      <div className="composeBtn" onClick={() => dispatch(OpenSendMessage())}>
        <AiOutlinePlus />
        <p>COMPOSE</p>
      </div>
      <div className="sidebarItem">
        <div className="leftside">
          <HiInbox className="sidebarIcon" />
          <p>Inbox</p>
        </div>
        <p>108</p>
      </div>{" "}
      <div className="sidebarItem">
        <div className="leftside">
          <HiStar className="sidebarIcon" />
          <p>Starred</p>
        </div>
        <p></p>
      </div>{" "}
      <div className="sidebarItem">
        <div className="leftside">
          <HiClock className="sidebarIcon" />
          <p>Snoozed</p>
        </div>
        <p></p>
      </div>{" "}
      <div className="sidebarItem">
        <div className="leftside">
          <AiOutlineSend className="sidebarIcon" />
          <p>Sent</p>
        </div>
        <p></p>
      </div>{" "}
      <div className="sidebarItem">
        <div className="leftside">
          <IoIosDocument className="sidebarIcon" />
          <p>Draft</p>
        </div>
        <p></p>
      </div>{" "}
      <div className="sidebarItem">
        <div className="leftside">
          <AiOutlineDown className="sidebarIcon" />
          <p>More</p>
        </div>
        <p></p>
      </div>
      <div className="line"></div>
      <div className="bottomArea">
        <p>Meet</p>
        <div className="bottomItems">
          <MdVideoCall className="sidebarIcon" />
          <p>New meeting</p>
        </div>
        <div className="bottomItems">
          <MdKeyboard className="sidebarIcon" />
          <p>Join a meeting</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
