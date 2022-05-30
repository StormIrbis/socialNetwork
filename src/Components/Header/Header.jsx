import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.main_header}>
      <a href="#" className={styles.header_logo}></a>
    </header>
  );
};

export default Header;
