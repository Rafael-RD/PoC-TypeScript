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

export function updateTask(id: number, completed: boolean){
    return db.query(`
        UPDATE tasks SET 
        completed = $2,
        updated = CURRENT_TIMESTAMP
        WHERE id = $1;
    `, [id, completed]);
}

export function checkTaskExistById(id: number){
    return db.query<TaskQuery>(`
        SELECT *
        FROM tasks
        WHERE id = $1;
    `, [id]);
}

const tasksRepository={
    getAllTasks,
    createTask,
    checkTaskExist,
    checkTaskExistById,
    updateTask
}

export default tasksRepository;