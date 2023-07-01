import { Request, Response } from "express";
import httpStatus from "http-status";
import tasksService from "../services/tasks.service";
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

const tasksController={
    getAllTasks,
    postTask
}

export default tasksController;