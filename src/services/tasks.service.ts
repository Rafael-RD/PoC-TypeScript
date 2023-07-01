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
    return existenceCheck.rowCount !== 0;
}

export async function updateTask(id: number, completed: boolean){
    const existenceCheck=await getTaskById(id);
    if(existenceCheck.rowCount === 0) throw {type: "NotFound", message: "Task not found"};
    if(existenceCheck.rows[0].completed === completed) throw {type: "SameStatus", message: "Task already has this status"}
    return await tasksRepository.updateTask(id, completed);
}

export async function getTaskById(id: number){
    return await tasksRepository.checkTaskExistById(id);
}

export async function deleteTask(id: number){
    const existenceCheck=await getTaskById(id);
    if(existenceCheck.rowCount === 0) throw {type: "NotFound", message: "Task not found"};
    return await tasksRepository.deleteTask(id);
}

const tasksService={
    getAllTasks,
    createTask,
    checkTaskExist,
    getTaskById,
    deleteTask
}

export default tasksService;