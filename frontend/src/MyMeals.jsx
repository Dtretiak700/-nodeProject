import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export const MyMeals = ({ text, editMyText, deleteMyMeal }) => {
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={editMyText}/>
            <MdDelete onClick={deleteMyMeal}/>
        </div>
    )
}

