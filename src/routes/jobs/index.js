const { Router } = require("express");
const { wrapAsync } = require("../../utils/routeUtils");

class JobRoutes {
    constructor(jobService) {
        this.jobService = jobService;
    }

    findAll = (req, res) => {
        const jobs = this.jobService.findAll();
        res.send(jobs);
    }

    static buildRoutes = (jobService) => {
        const jobRoutes = new JobRoutes(jobService);
        const router = Router();

        router.get("/", wrapAsync(jobRoutes.findAll));
        return router;
    };
}

module.exports = JobRoutes;