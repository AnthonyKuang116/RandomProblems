const express = require('express');
const apiRouter = express();
const projects = require('./data-store') //db containing projects


apiRouter.get('projects/:id', async (req, res, next) => {
    const {id} = req.params;
    try {
       const project = await projects({id: id});
       if(project) {
        res.status(200).send(project);
       }
       else {
           res.status(404)
       }
    } catch (error) {
        next({message: "BAD REQUEST"})
    }
})

module.exports = apiRouter;