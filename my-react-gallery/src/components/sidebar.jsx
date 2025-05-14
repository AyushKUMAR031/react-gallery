import { useState } from "react";
import { sidebarItems } from "../data/SideBarItem.jsx";
import styles from "./sidebar.module.css";

export default function Sidebar({ onSelect, isSidebarOpen }) {
  const [openKeys, setOpenKeys] = useState([]);

  const toggleOpen = (key) => {
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSelect = (key) => {
    onSelect(key);
  };

  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
      {sidebarItems.map((item) => (
        <div key={item.key}>
          <div
            onClick={() => item.children.length ? toggleOpen(item.key) : handleSelect(item.key)}
            className={styles.item}
          >
            {item.icon && <span className={styles.icon}>{<item.icon />}</span>}
            <span>{item.title}</span>
          </div>

          {openKeys.includes(item.key) && item.children.length > 0 && (
            <div className={styles.childContainer}>
              {item.children.map((child) => (
                <div
                  key={child.key}
                  onClick={() => handleSelect(child.key)}
                  className={styles.childItem}
                >
                  {child.icon && <span className={styles.icon}>{<child.icon />}</span>}
                  <span>{child.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
