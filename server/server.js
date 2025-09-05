import express from 'express';
import dotenv from 'dotenv'
import cors from "cors"
import connectDB from './database/mongodb.js';
import userCollection from './model/userSchema.js';


dotenv.config()
const port = process.env.PORT || 8080

const app = express();
app.use(express.json());
app.use(cors())

connectDB()

// Home Page Route
app.get('/', async(req, res) => {
  const user = await userCollection.find()
  res.status(200).json(user)
});

// Server is Running
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
})