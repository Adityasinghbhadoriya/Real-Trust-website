import express from 'express';
import { createProject, deleteProject, getOneProject, getProjects, updateProject } from '../Controllers/project.controller.js';
import adminMiddleware from '../Middlewares/admin.middleware.js';
const router = express.Router();

router.post("/create",adminMiddleware, createProject);
router.put("/update/:projectId",adminMiddleware, updateProject);
router.get("/get-projects", getProjects);
router.get("/:projectId", getOneProject);
router.delete("/delete/:projectId",adminMiddleware, deleteProject);

export default router