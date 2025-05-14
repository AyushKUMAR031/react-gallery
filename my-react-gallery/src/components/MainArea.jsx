import styles from "./mainArea.module.css";

export default function MainArea({ selected }) {
  console.log("Selected view:", selected);
  return (
    <div className={styles.main}>
      <h2>Current View: {selected}</h2>
      {/* Replace with actual dynamic components */}
    </div>
  );
}
