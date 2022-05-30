import styles from "./Message.module.css";

const Message = (props) => {
  return <div className={styles.message}>{props.messageText}</div>;
};

export default Message;
