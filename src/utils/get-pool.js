const path = require("path");
const fs = require("fs");
const fastCsv = require("fast-csv");

const getPool = () => {
    let csvData = [];
    fs.createReadStream(path.join(process.cwd(), "seed/job_opportunities.csv"))
        .pipe(fastCsv.parse({
            trim: true
        }))
        .on("data", (rowData) => {
            const sanitizedData = rowData.map(item => {
                if (item.length === 0) return null;
                return item;
            });
            const obj = {};

            sanitizedData.forEach((element, index) => {
                if (index == 0) obj["id"] = element;
                if (index == 1) obj["jobTitle"] = element;
                if (index == 2) obj["companyName"] = element;
                if (index == 3) obj["jobUrl"] = element;
            });
            csvData.push(obj);
        })
        .on("end", () => {
            csvData.shift();
            console.log("Database Initialized");
        });
    return csvData;
};

module.exports = getPool;