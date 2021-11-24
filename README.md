# Pathrise Take Home Assignment

## Explanation
This program is split into both a front-end UI and a small Node microservice. The Node microservice is a small Express app to serve csv data as json to the UI to be consumed.

### Server
The code for the server can be found under the root `src` directory. The architecture is as follows:

 - Datasources
	 - Mock datasource used to store our dummy csv data for querying. This datasource is initialized on server start-up.
 - Routes
	 - Routes used to call the API for querying
 - Services
	 - The services/modules that are responsible for handling the bulk of the application logic for that respective service (i.e. the `jobService` is responsible for handling any business logic related to jobs within the application). Here you will find the logic used to resolve the job opportunity csv data and convert it into the appropriate data with their respective job sources.
 
 I followed this particular architecture because it allows for us to have an organized structure for a microservice and allows for us to practice Inversion of Control, ensuring that each layer of the application structure contains logic related to just its required functions and dependencies.

#### Dependencies Used

 - Express (Used for HTTP/Routing)
 - Typescript (Type safety within our Javascript code)
 - FastCsv (Used for parsing and creating CSV files)

## How to Run Locally

 - Clone the repository
 - From the root, run `npm install` (this will install the necessary dependencies for both the front end and the backend)
 - Run `npm start` (this will spin up the server and the UI)

## Obtain CSV Data
- From the root, run `npm run db:with-source`. This will convert the provided seed/csv data and run our `jobService` to produce a new csv file with the added job sources. A similar CSV file has been provided for your convenience.
