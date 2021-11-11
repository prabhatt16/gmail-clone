import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth, provider } from "../firebase";
import "./SignUpPage.css";

function SignUpPage() {
  const dispatch = useDispatch();
  // const history=useHistory    ();
  const Login = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
          })
        );
        // history.push("/home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signInPage">
      <div className="signleft">
        <h1>
          Hey there,
          <br />
          Welcome to
          <span style={{ color: "blueviolet" }}> Gmail </span>
        </h1>
        <br />
        <br />
        <Button
          color="primary"
          variant="contained"
          onClick={Login}
          className="loginbtn"
        >
          Sign Up with Google{" "}
        </Button>
      </div>
      <div className="signright">
        <img
          src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="loginpic"
        />
      </div>
    </div>
  );
}

export default SignUpPage;
