import { FaBars } from "react-icons/fa";
import styles from "./navbar.module.css";

export default function Navbar({ toggleSidebar }) {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>React Gallery</span>
      <button onClick={toggleSidebar} className={styles.btn}>
        <FaBars />
      </button>
    </div>
  );
}