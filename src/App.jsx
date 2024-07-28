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
    console.log('click', feedbackType);
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1,
    })
      }
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);


 
  return (
    <div>
    <>
      <Description />
        <Options updateFeedback={updateFeedback} />
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
          />
      </>
      </div>
  );
};

export default App
