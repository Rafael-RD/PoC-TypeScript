import { Request, Response } from "express";
import httpStatus from "http-status";
import tasksService from "../services/tasks.service";

export function getAllTasks(req: Request, res: Response){

    try {
        const tasksSearch=tasksService.getAllTasks();
        return res.send(tasksSearch);
    } catch (error) {
        console.error(error);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const tasksController={
    getAllTasks
}

export default tasksController;