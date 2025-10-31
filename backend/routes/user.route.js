import express from "express";
import {getUserProfileAndRepos} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos)
// todo: get likes
// todo: like a profile

export default router;

