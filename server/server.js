import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/mongodb.js";
import userCollection from "./model/userSchema.js";

dotenv.config();
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// Home Page Route
app.get("/", async (req, res) => {
  const user = await userCollection.find();
  res.status(200).json(user);
});

// Register Donor Route
app.post("/register", async (req, res) => {
  const { name, age, village, phoneNumber, bloodGroup, isEligible } = req.body;

  try {
    const newUser = await userCollection.create({
      name,
      age,
      village,
      phoneNumber,
      bloodGroup,
      isEligible,
    });
    res.status(201).json(newUser);
  } catch (error) {
    // ✅ Validation Error (Mongoose Schema rules)
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ error: messages });
    }

    // ✅ Duplicate Error (যদি unique field থাকে)
    if (error.code === 11000) {
      return res.status(409).json({ error: "Duplicate field value" });
    }

    // ✅ Generic server error
    res.status(500).json({ error: "Internal Server Error" });
  }
});
import { ObjectId } from "mongodb";

app.get("/donors/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid donor ID" });
    }

    const donor = await userCollection.findOne({ _id: new ObjectId(id) });

    if (!donor) {
      return res.status(404).json({ error: "Donor not found" });
    }

    console.log("Fetched donor:", donor);
    res.status(200).json(donor);
  } catch (error) {
    console.error("Error fetching donor:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Server is Running
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
