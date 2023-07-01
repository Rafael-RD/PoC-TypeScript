import { Router } from "express";
import tasksController from "../controllers/tasks.controller";
import { schemaValidationMiddleware } from "../middleware/validationMiddleware";
import taskSchemas from "../schemas/tasks.schema";

const tasksRouter=Router();

tasksRouter.get("/tasks", tasksController.getAllTasks);
tasksRouter.post("/tasks", schemaValidationMiddleware(taskSchemas.createTaskSchema), tasksController.postTask);
tasksRouter.patch("/task/:id", schemaValidationMiddleware(taskSchemas.updateTaskSchema), tasksController.patchCompleteTask);
tasksRouter.delete("/task/:id", tasksController.deleteTask);

export default tasksRouter;