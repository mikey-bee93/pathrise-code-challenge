const jobBoardsJson = require("../jobBoards.json");

const mapJobSourceToJob = (jobs) => {
    const jobBoards = jobBoardsJson.job_boards.map(val => ({ name: val.name, rootDomain: val.root_domain }));
    const jobsWithSources = jobs.map(job => {
        if (job.companyName && jobBoards.find(board => board.name === job.companyName)) {
            return {
                ...job,
                jobSource: job.companyName
            }
        }

        if (job.jobUrl) {
            const board = jobBoards.find(el => job.jobUrl.includes(el.rootDomain));
            if (board) {
                return {
                    ...job,
                    jobSource: board.name
                };
            }

            return {
                ...job,
                jobSource: "Company Website"
            };
        }

        return {
            ...job,
            jobSource: "Unknown"
        }
    });

    return jobsWithSources;
};

module.exports = mapJobSourceToJob;