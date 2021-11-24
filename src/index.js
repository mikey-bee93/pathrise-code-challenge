const express = require("express");
const cors = require("cors");
const getPool = require("./utils/get-pool");
const JobDataSource = require("./datasources/jobs");
const JobService = require("./services/jobs");
const JobRoutes = require("./routes/jobs");

const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    server.use(express.static("client/build"));
  }

const jobDataSource = new JobDataSource(getPool());
const jobService = new JobService(jobDataSource);

server.use("/jobs", JobRoutes.buildRoutes(jobService));

server.listen(PORT, () => {
    console.info(`Server listening on Port: ${PORT}.`);
});