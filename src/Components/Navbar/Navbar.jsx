import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import SideBar from "./SideBar/SideBar";

const Navbar = (props) => {
  return (
    <div>
      <nav className={styles.main_nav}>
        <ul>
          <li className={styles.item}>
            <Link
              to="/profile"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Profile
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/dialogs"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Messages
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/news"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              News
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/music"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Music
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/settings"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Settings
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/users"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>

      <SideBar sideBarData = {props.sideBarData} />
      
    </div>
  );
};

export default Navbar;
