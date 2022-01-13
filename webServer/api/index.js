//create api router
const express = require("express");
const apiRouter = express.Router();

// attach other routers from files in this api directory (projects)
const projectsRouter = require("./projects");
apiRouter.use('/projects', projectsRouter);

module.exports = apiRouter;