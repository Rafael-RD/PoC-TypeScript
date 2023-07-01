import { Task } from "../protocols/tasks.protocol";
import tasksRepository from "../repositories/tasks.repository";

export async function getAllTasks(){
    return (await tasksRepository.getAllTasks()).rows;
}

export async function createTask(task: Task){
    if(await checkTaskExist(task)) throw {type: "ConflictError", message: "Task already exists"};
    return await tasksRepository.createTask(task);
}

export async function checkTaskExist(task: Task){
    const existenceCheck= await tasksRepository.checkTaskExist(task);
    return existenceCheck.rows.length !== 0;
}

const tasksService={
    getAllTasks,
    createTask,
    checkTaskExist
}

export default tasksService;