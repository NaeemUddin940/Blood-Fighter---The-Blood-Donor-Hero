import express from 'express';
const app = express();
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 8080

app.use(express.json());

// Home Page Route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Server is Running
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
})