import { JobDataSource, JobWithSource } from "../../types";
import { mapJobSourceToJob } from "../../utils";

export class JobService {
    private dataSource: JobDataSource;
    
    constructor(dataSource: JobDataSource) {
        this.dataSource = dataSource;
    }

    public findAll = (): JobWithSource[] => {
        const results = this.dataSource.findAll();
        const jobsWithSources = mapJobSourceToJob(results);
        return jobsWithSources;
    }
}