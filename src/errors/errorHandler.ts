import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { CustomError } from "../protocols/tasks.protocol";

export default function errorHandler(error: ErrorRequestHandler & CustomError, req: Request, res: Response, next: NextFunction){
    if(error.type === "ConflictError") return res.status(httpStatus.CONFLICT).send(error.message);
    if(error.type === "NotFound") return res.status(httpStatus.NOT_FOUND).send(error.message);
    if(error.type === "SameStatus") return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}