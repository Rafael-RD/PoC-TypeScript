import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export function schemaValidationMiddleware(schema: ObjectSchema){
    return (req: Request, res: Response, next: NextFunction)=>{
        const validation= schema.validate(req.body, {abortEarly: false});
        if(validation.error){
            const log= validation.error.details.map(e=>e.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(log);
        } else next();
    }
}