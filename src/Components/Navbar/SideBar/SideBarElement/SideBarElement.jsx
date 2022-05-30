import { NavLink } from "react-router-dom";
import styles from "./SideBarElement.module.css";

const SideBarElement = (props) => {
  return (
    <li className={styles.sideBarItem}>
      <NavLink
        to={"/profile/" + props.name}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <img className="sideBarItem_avatar" src={props.image} alt="avatar" />
        <span className="sideBarItem_user">{props.name}</span>
      </NavLink>
    </li>
  );
};

export default SideBarElement;
