import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  sendMessageIsOpen: false,
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    OpenSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    CloseSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});
export const { selectedMail, OpenSendMessage, CloseSendMessage } =
  mailSlice.actions;
export const selectOpenMail = (state) => state.mail.selectedMail;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
