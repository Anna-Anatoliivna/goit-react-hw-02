import styles from "./Feedback.module.css"

export const Feedback = () => {
  return (
    <div className={styles.card}>
      <ul className={styles.list}>
        <li className={styles.item}>Good: 0</li>
        <li className={styles.item}>Neutral: 0</li>
        <li className={styles.item}>Bad: 0</li>
        <li className={styles.item}>Total: 0</li>
        <li className={styles.item}>Positsve: 0</li>
      </ul>
    </div>
  )
}
