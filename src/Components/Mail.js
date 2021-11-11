import React from "react";
import { RiFolderSharedFill, RiSpam2Fill } from "react-icons/ri";
import {
  MdArchive,
  MdArrowBack,
  MdCancel,
  MdDelete,
  MdMarkunreadMailbox,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineSpaceDashboard,
  MdRefresh,
  MdSend,
} from "react-icons/md";
import "./Mail.css";
import { IoMdClock, IoMdShareAlt } from "react-icons/io";
import { ImArrowRight } from "react-icons/im";
import {
  AiFillClockCircle,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Avatar } from "@mui/material";
import { GrSend } from "react-icons/gr";
import { BsShareFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../features/mailSlice";
function Mail() {
  const navigate = useNavigate();
  const selected = useSelector(selectOpenMail);
  return (
    <div className="mailPage">
      <div className="mailList">
        <div className="left_area">
          <MdArrowBack className="topIcons" onClick={()=>navigate("/")  } />
          <MdArchive className="topIcons" />
          <RiSpam2Fill className="topIcons" />
          <MdDelete className="topIcons" />
          <MdMarkunreadMailbox className="topIcons" />
          <AiFillClockCircle className="topIcons" />
          <RiFolderSharedFill className="topIcons" />
          <HiOutlineDotsVertical className="topIcons" />
        </div>
        <div className="right_area">
          <MdOutlineKeyboardArrowLeft className="topIcons" />
          <MdOutlineKeyboardArrowRight className="topIcons" />
        </div>
      </div>
      <div className="horizontalLine"></div>
      <div className="titleSection">
        <p>{selected?.subject}</p>
        <div className="indexPart">
          <p>index</p>
          {/* <MdCancel /> */}
        </div>
      </div>
      <div className="userDetails">
        <div className="leftOfTop">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <div className="sender">
            <h4>{selected?.title}</h4>
            {/* <MdSend
              style={{
                marginLeft: "3px",
                marginRight: "3px",
                color: "grey",
                width: "20px",
                height: "20px",
              }}
            /> */}
            {/* <p>noreply@applytojob.com</p> */}
          </div>
        </div>
        <div className="rightOfTop">
          <p>12:12:12</p>
          <AiOutlineStar className="topIcons" />
          <IoMdShareAlt className="topIcons" />
          <HiOutlineDotsVertical className="topIcons" />
        </div>
      </div>
      <div className="messageArea">
        <p>Hi Prabhat,</p>
        <p className="message">
          {selected?.description}
        </p>
        <div className="btnSection">
          <div className="btnContainer">
            <IoMdShareAlt className="topIcons" />
            <p>Reply</p>
          </div>
          <div className="btnContainer">
            <ImArrowRight className="topIcons" />
            <p>Forward</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
