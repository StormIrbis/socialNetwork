import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message messageText={message.messageText} key={message.id} id={message.id} />
  ));

  let newMessageText = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onNewMessage = () => {
    let text = newMessageText.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={styles.dialogsPage}>
      <ul className={styles.dialogItems}>{dialogsElements}</ul>
      <div className={styles.messages}>{messagesElements}</div>
      <div>
        <textarea
          onChange={onNewMessage}
          name="newMessage"
          ref={newMessageText}
          id="newMessage"
          placeholder="Enter your message"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <button onClick={onSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
