import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { HiStar } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { selectedMail } from "../features/mailSlice";
import "./EmailRow.css";

function EmailRow({ id, title, subject, description, time }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openMail = () => {
    dispatch(
      selectedMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/mail")
  };
  return (
    <div onClick={openMail} className="emailRow" key={id}>
      <div className="emailRow_left">
        <input type="checkbox" className="topIcons" />
        <AiOutlineStar className="topIcons" />
        <h4>{title}</h4>
      </div>
      <div className="emailRow_center">
        <div className="center_area">
          <h4>{subject}</h4> - <p>{description}</p>
        </div>
        <h6 className="timing">{time}</h6>
      </div>
    </div>
  );
}

export default EmailRow;
