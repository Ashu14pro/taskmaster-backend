import express from "express";
import Task from "../models/Task.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Task
router.post("/", auth, async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Get Tasks
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find().populate("assignedTo");
  res.json(tasks);
});

// Update Task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// Delete Task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

// Add Comment
router.post("/:id/comment", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.comments.push(req.body);
  await task.save();
  res.json(task);
});

export default router;