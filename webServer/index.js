const express = require('express');
const server = express();

const PORT = 8000;

const apiRouter = require("./api");
server.use('/api', apiRouter);

//responding with a path other than 404, sending back status code 404
server.use('*', (req, res, next) => {
    res.status(400);
})

server.listen(PORT, () => {
    console.log("Server is listening on port", PORT);
})




