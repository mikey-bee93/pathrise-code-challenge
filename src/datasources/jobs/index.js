class JobDataSource {
    constructor(pool) {
        this.pool = pool;
    }

    findAll = () => {
        return this.pool;
    }
}

module.exports = JobDataSource;