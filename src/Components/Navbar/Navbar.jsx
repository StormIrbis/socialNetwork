import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";
import SideBar from "./SideBar/SideBar";

const Navbar = (props) => {
  return (
    <div>
      <nav className={styles.main_nav}>
        <ul>
          <li className={styles.item}>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Profile
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/dialogs"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Messages
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              News
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/music"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Music
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Settings
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>

      <SideBar sideBarData = {props.sideBarData} />
      
    </div>
  );
};

export default Navbar;
