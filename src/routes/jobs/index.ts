import { Router, Request, Response } from "express";
import { wrapAsync } from "../../utils";
import { JobService } from "../../types";

export class JobRoutes {
    private jobService: JobService;

    constructor(jobService: JobService) {
        this.jobService = jobService;
    }

    public findAll = (req: Request, res: Response): void => {
        const jobs = this.jobService.findAll();
        res.send(jobs);
    }

    public static buildRoutes = (jobService): Router => {
        const jobRoutes = new JobRoutes(jobService);
        const router = Router();

        router.get("/", wrapAsync(jobRoutes.findAll));
        return router;
    };
}