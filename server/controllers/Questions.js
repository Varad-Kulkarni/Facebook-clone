import Questions from '../models/Questions.js'
import mongoose from 'mongoose'


export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const userId = req.userId;
    const post = req.body;
    // const postQuestion = new Questions({ ...postQuestionData, userId: req.userId});
    const postQuestion = new Questions(postQuestionData);

    try{
        await postQuestion.save();
        res.status(200).json("posted a question successfully");
    }
    catch(err){
        console.log(err);
        res.status(409).json("could not post a new question")
    }
}

export const getAllQuestions = async (req, res) => {
    try {
        const questionList = await Questions.find();
        console.log(questionList);
        res.status(200).json(questionList);
    }
    catch(err){
        res.status(400).json({ message: err.message});
    }
}