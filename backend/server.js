const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://mongo:27017/todoapp")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema
const TodoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model("Todo", TodoSchema);

// Get todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add todo
app.post("/todos", async (req, res) => {
  await Todo.create({ task: req.body.task });
  res.json({ message: "Todo added" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
