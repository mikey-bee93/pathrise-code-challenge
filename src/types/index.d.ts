export type JobDataSource = {
    findAll: () => Job[];
}

export type JobService = {
    findAll: () => Job[];
};

export type Job = {
    id: number;
    jobTitle?: string;
    companyName: string;
    jobUrl?: string;
};

export type JobWithSource = Job & { jobSource: string; };

export type Config = {
    connectionLimit: number,
    waitForConnections: boolean;
    queueLimit: number;
    host: string;
    user: string;
    password: string;
    database: string;
    charset: string;
};