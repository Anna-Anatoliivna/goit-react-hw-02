import styles from "./Options.module.css"

export const Options = ({updateFeedback, totalFeedback, resetButton}) => {
  return (
    <div className={styles.card}>
      <button type="button" onClick={() => updateFeedback("good")}>Good</button>
      <button type="button" onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button type="button" onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback ? <button type="button" onClick={resetButton}>Reset</button> : ""}
      </div>
  )
}

 