import styles from "./Feedback.module.css"

export const Feedback = ({good, neutral, bad, total, positiveFeedback}) => {
  return (
    <div className={styles.card}>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
        <li className={styles.item}>Total: {total}</li>
        <li className={styles.item}>Positsve: {positiveFeedback}%</li>
      </ul>
    </div>
  )
}
