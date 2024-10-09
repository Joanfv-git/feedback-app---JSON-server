
import { useContext } from 'react';
import FeedBackContext from "../context/FeedBackContext";

function FeedbackStats() {
  const{feedback} = useContext(FeedBackContext)
    let average= feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;
    average = average.toFixed(1).replace(/\.0+$/, '');
  return (
    <div className="feedback-stats">
        <h4>Total reviews: {feedback.length}</h4>
        <h4>Average rating: {average}</h4>
    </div>
  )
}


export default FeedbackStats