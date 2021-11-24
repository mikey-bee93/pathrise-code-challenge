import { Job } from "../../types";

export class JobDataSource {
    private pool: Job[];

    constructor(pool: Job[]) {
        this.pool = pool;
    }

    public findAll = (): Job[] => {
        return this.pool;
    }
}