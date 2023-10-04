const express = require("express");
const app = express();
const QuestionAnswer = require("../Modal/QuestionsModal");

app.post("/", async (request, response) => {
    try {
        const technology = request.body.technology;
        const fetchQuestions = await QuestionAnswer.find({technology})
        response.send(fetchQuestions);
    }
    catch (error) {
        console.log("Error Occured in User API")
        response.send("Error Ocurred")
    }
})

app.post("/new", async (request, response) => {
    try {
        const { technology , question , answer } = request.body;
        console.log("Gettingh" , technology , question , answer);
        
        const newQuestionAnswer = new QuestionAnswer({
          technology,
          question,
          answer,
        });
        newQuestionAnswer.save();
        response.send("Question added successfully")
    } catch (error) {
        response.status(500).send(error);
    }
})


module.exports = app;