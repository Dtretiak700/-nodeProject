const MealModel = require('./MealModel');

module.exports.getMeal = async (req,res) => {
    const myMeal = await MealModel.find();
    res.send(myMeal);
}

module.exports.saveMeals = async (req,res) => {
    const { title } = req.body;
    MealModel.create({ title })
    .then((data) => {console.log('meal added')
    res.send(data)
    })
}