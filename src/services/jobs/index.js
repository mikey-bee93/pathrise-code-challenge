const mapJobSourceToJob = require("../../utils/map-job-source");

class JobService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    findAll = () => {
        const results = this.dataSource.findAll();
        const jobsWithSources = mapJobSourceToJob(results);
        return jobsWithSources;
    }
}

module.exports = JobService;