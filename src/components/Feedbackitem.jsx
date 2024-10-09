import PropTypes from 'prop-types'
import Card from "./shared/Card"
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedBackContext from '../context/FeedBackContext'

function Feedbackitem({item}) {  
const {deleteFeedbak} = useContext(FeedBackContext)
const {editFeedback} = useContext(FeedBackContext)

  return (
    <Card>
        <div className="num-display">
            {item.rating}
        </div>
        <button onClick={()=> deleteFeedbak(item.id)} className="close"><FaTimes color='purple'/> </button>
        <button onClick={()=> editFeedback(item)} className="edit"><FaEdit color='purple'/></button>
        <div className="text-display">
            {item.text}  
        </div>
        </Card>
  )
}
Feedbackitem.propTypes = {
    item: PropTypes.object.isRequired

}

export default Feedbackitem