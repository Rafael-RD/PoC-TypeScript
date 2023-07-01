import { Router } from "express";
import tasksRouter from "./tasks.router";

const indexRouter=Router();

indexRouter.use(tasksRouter);

export default indexRouter;