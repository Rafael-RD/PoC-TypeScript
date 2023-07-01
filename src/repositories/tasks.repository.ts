import db from "../database/database";
import { Task, TaskQuery } from "../protocols/tasks.protocol";

export function getAllTasks(){
    return db.query<TaskQuery>(`
        SELECT *
        FROM tasks;
    `)
}

export function createTask(task: Task){
    return db.query(`
        INSERT INTO 
        tasks(name, description, date, responsible)
        VALUES ($1, $2, $3, $4);
    `,[task.name, task.description, task.date, task.resposible]);
}

export function checkTaskExist(task: Task){
    return db.query<TaskQuery>(`
        SELECT *
        FROM tasks
        WHERE 
        name ILIKE $1 AND 
        date = $2 AND
        responsible ILIKE $3;
    `, [task.name, task.date, task.resposible]);
}

const tasksRepository={
    getAllTasks,
    createTask,
    checkTaskExist
}

export default tasksRepository;