import db from "../database/database";
import { TaskQuery } from "../protocols/tasks.protocol";

export function getAllTasks(){
    return db.query<TaskQuery>(`
        SELECT *
        FROM tasks;
    `)
}

const tasksRepository={
    getAllTasks
}

export default tasksRepository;