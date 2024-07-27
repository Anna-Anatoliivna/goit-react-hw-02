import { useState } from "react";

import { Description } from './components/Description/Description';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';

import './App.css'

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const updateFeedback = (feedbackType) => {
    setReviews((prevState) => ({
      ...prevState, [feedbackType]: feedbackType + 1,
    }))
  }
  

  return (
    <div>
    <>
      <Description />
        <Options feedbackFunction={updateFeedback} />
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
        />
      </>
      </div>
  );
};

export default App
