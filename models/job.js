const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
	{
		companyName: { type: String, required: true },
		lineOfWork: { type: String, required: true },
		position: { type: String, required: true },
		yrsOfExp: { type: String, required: true },
		email: { type: String, required: true },
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Job", jobSchema);