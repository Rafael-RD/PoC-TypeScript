import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}