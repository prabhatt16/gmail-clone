import React, { useEffect, useState } from "react";
import "./MailList.css";
import { MdPerson, MdRefresh, MdTag } from "react-icons/md";
import { HiDotsVertical, HiInbox } from "react-icons/hi";
import { BsFillTagFill } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function MailList() {
  const [mails, setMails] = useState([]);
  const navigate = useNavigate();

  const goToMailPage = (e) => {
    e.preventDefault();
    navigate("/mail");
  };
  useEffect(() => {
    db.collection("mails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setMails(snapShot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="topHeader">
      <div className="mailList">
        <div className="left_area">
          <input type="checkBox" className="topIcons" />
          <MdRefresh className="topIcons" />
          <HiDotsVertical className="topIcons" />
        </div>
        <div className="right_area">
          <MdOutlineKeyboardArrowLeft className="topIcons" />
          <MdOutlineKeyboardArrowRight className="topIcons" />
          <MdOutlineSpaceDashboard className="topIcons" />
        </div>
      </div>
      <div className="section_items">
        <Section Icon={HiInbox} title="Primary" color="red" selected />
        <Section Icon={MdPerson} title="Secondry" color="skyblue" />
        <Section Icon={BsFillTagFill} title="Promotion" color="brown" />
      </div>
      <div className="mailList_list">
        {mails.map((item) => (
          <EmailRow
            title={item.to}
            subject={item.subject}
            description={item.message}
            time={new Date(item.timestamp.seconds * 1000).toLocaleDateString(
              "en-IN"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default MailList;
