// import * as fastCsv from "fast-csv";
// import fs from "fs";
// import path from "path";
// import { mapJobSourceToJob } from "./utils";
const fastCsv = require("fast-csv");
const fs = require("fs");
const path = require("path");
const mapJobSourceToJob = require("./utils/map-job-source");

const convertToJobSourceResolution = () => {
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
            const writeStream = fs.createWriteStream(path.join(process.cwd(), "seed/job_source_resolution.csv"));

            fastCsv
                .write(mapJobSourceToJob(csvData), { headers: true })
                .on("end", () => {
                    console.log("Wrote to the file successfully!");
                    process.exit(0);
                })
                .pipe(writeStream);
        });
};

convertToJobSourceResolution();