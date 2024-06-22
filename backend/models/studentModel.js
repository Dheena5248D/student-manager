const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    regNumber: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    gender: String,
    email: String,
    phone: {type:Number, required: true, unique: true},
    cgpa: mongoose.Types.Decimal128,
    placed: Boolean,
    company: String,
    historyOfArrears: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
