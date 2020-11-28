'user strict'

const mongoose = require('mongoose')
Jobs = mongoose.model('Jobs')

exports.ListAllJobs = function (req, res) {
    Jobs.find({}, function (error, job) {
        if (error)
            res.send(error)
        res.json(job)
    })
}

exports.CreateAJobs = function (req, res) {
    let new_job = new Jobs(req.body)
    new_job.save(function (error, job) {
        if (error)
            res.send(error)
        res.json(job)
    })
}


exports.ReadAJob = function (req, res) {
    Jobs.findById(req.params.jobId, function (error, job) {
        if (error)
            res.send(error)
        res.json(job)
    })
}

exports.UpdateAJob = function (req, res) {
    Jobs.findOneAndUpdate({
        _id: req.params.jobId
    }, req.body, { new: true }, function (error, job) {
        if (error)
            res.send(error)
        res.json(job)
    })
}

exports.DeleteAJob = function (req, res) {
    Jobs.remove({
        _id: req.params.jobId
    }, function (error, job) {
        if (error)
            res.send(error)
        res.json({
            message: "Job successfully deleted"
        })
    })
}


