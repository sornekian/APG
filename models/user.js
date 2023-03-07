const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    // cellPhoneNumber: { type: String, required: true },
    // homeAddress: { type: String, required: true },
    // birthDate: { type: Date, required: true },
    // lineOfWork: { type: String, required: true },
    // currentPosition: { type: String, required: true },
    // companyName: { type: String, required: true },
    // undergraduateUniversity: { type: String, required: true },
    // undergraduateMajor: { type: String, required: true },
    // degreeCompletionYear: { type: Number, required: true }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password
            return ret
        }
    }
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})


module.exports = mongoose.model('User', userSchema);
