import express from "express";
import Team from "../models/Team.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Team
router.post("/", auth, async (req, res) => {
  const team = await Team.create(req.body);
  res.json(team);
});

// Add Member
router.post("/:id/add", auth, async (req, res) => {
  const team = await Team.findById(req.params.id);
  team.members.push(req.body.userId);
  await team.save();
  res.json(team);
});

export default router;