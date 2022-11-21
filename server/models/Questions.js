import mongoose from 'mongoose'

const QuestionSchema = mongoose.Schema({
    discription: {type: String, required: "Post must have body"},
    userPosted: { type: String, required: "Post must have an author"},
    userId: {type: String},
    comments: [{
        commentBody: String,
        userCommented: String,
        userId: String,
    }]
})

export default mongoose.model("Question", QuestionSchema)