import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'

const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("This is a facebook clone API")
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

// const CONNECTION_URL = "mongodb://admin:admin@ac-xy1tork-shard-00-00.uea6aas.mongodb.net:27017,ac-xy1tork-shard-00-01.uea6aas.mongodb.net:27017,ac-xy1tork-shard-00-02.uea6aas.mongodb.net:27017/?ssl=true&replicaSet=atlas-14k5ma-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {console.log(`server is running on port ${PORT}`)}))
.catch((err) => console.log(err.message))