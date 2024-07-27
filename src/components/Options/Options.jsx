import styles from "./Options.module.css"

export const Options = ({feedbackFunction}) => {
  return (
    <div className={styles.card}>
      <button onClick={feedbackFunction} type="button">Good</button>
      <button onClick={feedbackFunction} type="button">Neutral</button>
      <button onClick={feedbackFunction} type="button">Bad</button>
      <button type="button">Reset</button>
      </div>
  )
}

 