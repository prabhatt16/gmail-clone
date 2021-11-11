import React from "react";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { CloseSendMessage } from "../features/mailSlice";
import "./SendMail.css";
import { auth, db } from "../firebase";
import firebase from "firebase";

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("mails")
      .add({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(dispatch(CloseSendMessage()), console.log("mail has sent!!"));
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <p>New Message</p>
        <MdCancel onClick={() => dispatch(CloseSendMessage())} />
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="toMail">
          <input
            name="to"
            type="email"
            placeholder="To"
            {...register("to", { required: true })}
          />
          {errors.to && <p className="sendmail_error">To is required!!</p>}
        </div>
        <div className="subjectMail">
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <p className="sendmail_error">Subject is required!!</p>
          )}
        </div>
        <textarea
          name="message"
          type="text"
          placeholder="message"
          {...register("message", { required: true })}
          className="messageInput"
        />
        {errors.message && (
          <p className="sendmail_error">Message is required!!</p>
        )}

        <button className="send_btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMail;
