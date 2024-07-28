import styles from "./Options.module.css"

export const Options = ({updateFeedback}) => {
  return (
    <div className={styles.card}>
      <button type="button" onClick={() => updateFeedback("good")}>Good</button>
      <button type="button" onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button type="button" onClick={() => updateFeedback("bad")}>Bad</button>
      <button type="button">Reset</button>
      </div>
  )
}

 