import axios from "axios";

const getAllMeals = (setMeal) => {
    axios.get("http://localhost:4000")
    .then(({data}) => {console.log(data)})
}

export { getAllMeals };