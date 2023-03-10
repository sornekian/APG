const Job = require('../../models/job')

module.exports = {
    create,
    index,
    deleteJob,
    show
}

async function index(req, res) {
    const userId = req.user._id;
    const jobs = await Job.find({});
    res.json(jobs);
}
async function create(req, res) {
    console.log("in job create controller")

    const job = new Job({
        user: req.body.user,
        companyName: req.body.companyName,
        lineOfWork: req.body.lineOfWork,
        position: req.body.position,
        yrsOfExp: req.body.yrsOfExp,
        email: req.body.email,

    });
    try {
        const savedJob = await job.save()
        res.json(savedJob)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function deleteJob(req, res) {
    console.log("in delete controller")
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id);
        if (!deletedJob) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.json({ message: "Job deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

async function show(req, res) {
    // console.log(req.params.id)
    const job = await Job.findById(req.params.id);
    res.json(job);
}