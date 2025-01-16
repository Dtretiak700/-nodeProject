import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export const MyMeals = ({ text, updatingInInput, deleteMyMeal }) => {
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}/>
            <MdDelete onClick={deleteMyMeal}/>
        </div>
    )
}

