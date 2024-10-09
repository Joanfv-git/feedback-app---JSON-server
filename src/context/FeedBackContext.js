import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid";

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
        text: 'Great service',
        rating: 10
        },
        {
            id: 2,
        text: 'Nice product',
        rating:7
        },
        {
            id: 3,
        text: 'I hate it',
        rating: 3
        }
    ])

    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })
    //Delete feedback
    const deleteFeedbak = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?"))
          setFeedback(feedback.filter((item) => item.id !== id));
      };
        //Add feedback
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();  
        setFeedback([newFeedback, ...feedback]);
        };
        //Edit feedback
        const editFeedback = (item) => {
            setFeedbackEdit({item, edit:true})
        }

        const updateFeedBack=(id, updItem)=>{
            setFeedback( feedback.map((item) => (item.id === id ?{...item, ...updItem}: item)))
        }

    return <FeedBackContext.Provider  value={{
        feedback,
        deleteFeedbak,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedBack
        
    }}>
    {children}
    </FeedBackContext.Provider> 
}

export default FeedBackContext