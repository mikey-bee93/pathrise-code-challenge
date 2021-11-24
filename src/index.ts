import express from "express";
import cors from "cors";
import { getPool } from "./utils";
import { JobDataSource } from "./datasources/jobs";
import { JobService } from "./services/jobs";
import { JobRoutes } from "./routes/jobs";

const server = express();
const PORT = 5000;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));

const jobDataSource = new JobDataSource(getPool());
const jobService = new JobService(jobDataSource);

server.use("/jobs", JobRoutes.buildRoutes(jobService));

server.listen(PORT, (): void => {
    console.info(`Server listening on Port: ${PORT}.`);
});