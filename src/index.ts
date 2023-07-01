import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index.router";
import errorHandler from "./errors/errorHandler";

dotenv.config();

const server=express();

server.use(express.json());

server.use(indexRouter);
server.use(errorHandler);

server.listen(process.env.PORT, ()=>console.log(`Server on ${process.env.PORT}`));