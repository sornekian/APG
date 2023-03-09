const Job = require('../../models/job')

module.exports = {
    create,
    index,
}

async function create(req, res) {
    const job = new Job({
        text: req.body.text,
        user: req.body.user,
    });
    try {
        const savedJob = await job.save()
        res.json(savedJob)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function index(req, res) {
    const userId = req.user._id;
    const jobs = await Job.find({ user: userId });
    res.json(jobs);
}