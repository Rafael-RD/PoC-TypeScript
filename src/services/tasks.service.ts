import tasksRepository from "../repositories/tasks.repository";

export async function getAllTasks(){
    return (await tasksRepository.getAllTasks()).rows;
}

const tasksService={
    getAllTasks
}

export default tasksService;