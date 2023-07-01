import Joi from "joi";
import { Task } from "../protocols/tasks.protocol";

export const createTaskSchema=Joi.object<Task>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.string().required(),
    resposible: Joi.string().required(),
});

export const updateTaskSchema=Joi.object({
    completed: Joi.boolean().required()
});

const taskSchemas={
    createTaskSchema,
    updateTaskSchema
};

export default taskSchemas;