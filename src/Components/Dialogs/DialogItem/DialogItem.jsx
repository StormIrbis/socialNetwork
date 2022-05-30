import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li className={styles.item + " " + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  );
};

export default DialogItem;
