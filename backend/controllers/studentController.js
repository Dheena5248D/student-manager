const Student = require('../models/studentModel')
 
exports.addStudent = async (req, res) => {
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        regNumber: req.body.regNumber,
        email: req.body.email,
        phone: req.body.phone,
        cgpa: req.body.cgpa,
        placed: req.body.placed,
        company: req.body.company,
        historyOfArriors: req.body.historyOfArriors
    });
    try {
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        res.status(400).json(err);
    }
}


exports.getStudents = async (req, res) => {
    const students = await Student.find();
    res.json(students);
}

exports.getStudent = async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
} 

exports.updateStudent = async (req, res) => {
    try {
    const student = await Student.findByIdAndUpdate(req.params.id,{  
        name : req.body.name,
        gender : req.body.gender,
        email : req.body.email,
        phone : req.body.phone,
        age : req.body.age,
        cgpa : req.body.cgpa,
        placed : req.body.placed,
        company : req.body.company,
        historyOfArriors : req.body.historyOfArriors},{new:true,runValidators:true});
  
    if (!student) {
        res.status(404).json({ message: 'Student not found' });
    } else {
        res.status(200).json(student);
    }}
    catch (err) {
        res.status(400).json(err);
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
        } else {
            res.status(200).json(student);
        }
    } catch (err) {
        res.status(400).json(err);
    }
}   
