'use strict'

module.exports = function (app) {
    const todoJobs = require('../controllers/todoJobs')

    app.route('/jobs')
        .get(todoJobs.ListAllJobs)
        .post(todoJobs.CreateAJobs)

    app.route('/jobs/:jobId')
        .get(todoJobs.ReadAJob)
        .put(todoJobs.UpdateAJob)
        .delete(todoJobs.DeleteAJob)
}