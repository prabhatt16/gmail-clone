import React, { useEffect } from "react";
import { MdSettingsInputComponent } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Mail from "./Components/Mail";
import MailList from "./Components/MailList";
import SendMail from "./Components/SendMail";
import Sidebar from "./Components/Sidebar";
import SignUpPage from "./Components/SignUpPage";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
          })
        );
      }
    });
  }, []);
  return (
    <Router>
      {!user ? (
        <SignUpPage />
      ) : (
        <div className="App">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<MailList />} />
              <Route path="mail" element={<Mail />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
