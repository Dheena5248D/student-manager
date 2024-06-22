const express = require('express');
const router = express.Router();

const { getStudents, getStudent, addStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

router.get('/getStudents', getStudents);
router.get('/getStudent/:id', getStudent);
router.post('/addStudent', addStudent);
router.put('/updateStudent/:id', updateStudent);
router.delete('/deleteStudent/:id', deleteStudent);

module.exports = router;