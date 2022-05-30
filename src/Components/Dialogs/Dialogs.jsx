import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message messageText={message.messageText} />
  ));

  let addNewMessage = React.createRef();

  let sendMessage = () =>{
    props.dispatch(sendMessageActionCreator());
  }  

  let newMessage = () => {
    let text = addNewMessage.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={styles.dialogsPage}>
      <ul className={styles.dialogItems}>{dialogsElements}</ul>
      <div className={styles.messages}>{messagesElements}</div>
      <div>
        <textarea
          onChange={newMessage}
          ref={addNewMessage}
          name="newMessage"
          id="newMessage"
          placeholder="Enter your message"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
