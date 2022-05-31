import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let newMessage = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <Dialogs
      sendMessage={sendMessage}
      newMessage={newMessage}
      dialogsData={state.dialogs.dialogsData}
      messagesData={state.dialogs.messagesData}
    />
  );
};

export default DialogsContainer;
