import {motion, AnimatePresence} from 'framer-motion';
import { useContext } from 'react';

import Feedbackitem from "./Feedbackitem";
import FeedBackContext from "../context/FeedBackContext";

function FeedbackList() {
const{feedback} = useContext(FeedBackContext)

if (feedback.length === 0|| !feedback) {
    return <h2>No feedback found</h2>
}
    return (
    <div className="feedback-list">
        <AnimatePresence>
        
        {feedback.map((item) => (
            <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <Feedbackitem key={item.id} item={item} />
            </motion.div>
        ))
            }
            
        </AnimatePresence>
       
      
    </div>
  )
}




export default FeedbackList