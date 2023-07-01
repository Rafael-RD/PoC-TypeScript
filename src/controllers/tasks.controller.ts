import { Request, Response } from "express";
import httpStatus from "http-status";
import tasksService, { updateTask } from "../services/tasks.service";
import { Task } from "../protocols/tasks.protocol";

export async function getAllTasks(req: Request, res: Response){
    const tasksSearch=await tasksService.getAllTasks();
    return res.send(tasksSearch);
}

export async function postTask(req: Request, res: Response){
    const task = req.body as Task;

    const createLog=await tasksService.createTask(task);

    return res.status(201).send("Created!");
}

export async function patchCompleteTask(req: Request, res: Response){
    const id= Number(req.params.id);
    const completed = req.body.completed as boolean;
    if(isNaN(id) || id<0) return res.status(httpStatus.UNPROCESSABLE_ENTITY).send("Param is not a valid number");
    if(typeof req.body.completed !== "boolean") return res.status(httpStatus.UNPROCESSABLE_ENTITY).send("Wrong status format");

    const updateLog= await updateTask(id, completed);
    return res.status(httpStatus.ACCEPTED).send("Task updated");
}

export async function deleteTask(req: Request, res: Response){
    const id= Number(req.params.id);
    if(isNaN(id) || id<0) return res.status(httpStatus.UNPROCESSABLE_ENTITY).send("Param is not a valid number");

    const deleteLog= await tasksService.deleteTask(id);
    return res.status(httpStatus.ACCEPTED).send("Task deleted");
}

const tasksController={
    getAllTasks,
    postTask,
    patchCompleteTask,
    deleteTask
}

export default tasksController;