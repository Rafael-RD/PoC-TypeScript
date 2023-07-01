import { Router } from "express";
import tasksController from "../controllers/tasks.controller";
import { schemaValidationMiddleware } from "../middleware/validationMiddleware";
import { createTaskSchema } from "../schemas/tasks.schema";

const tasksRouter=Router();

tasksRouter.get("/tasks", tasksController.getAllTasks);
tasksRouter.post("/tasks", schemaValidationMiddleware(createTaskSchema), tasksController.postTask);

export default tasksRouter;