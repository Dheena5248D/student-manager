import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent  } from '../actions/studentActions';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddStudent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
 const {error, studentAdded} = useSelector((state) => state.studentReducer);
    useEffect(() => {
        if(error) {
            toast.error(error.errorResponse.errmsg);
            }
            if (studentAdded) {
                toast.success("Student added successfully!");
                navigate('/dashboard');
                // dispatch(clearStudentAdded());
            }
    }, [error, navigate, studentAdded, dispatch]);

    const [student, setStudent] = useState({
        name: '',
        regNumber: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        cgpa: '',
        placed: false,
        company: '',
        historyOfArrears: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setStudent(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch action to add student
        dispatch(addStudent(student));
    };

    return (
        <div className="add-student-container">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit} className="add-student-form">
                <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
                <input type="text" name="regNumber" value={student.regNumber} onChange={handleChange} placeholder="Registration Number" required />
                <input type="number" name="age" value={student.age} onChange={handleChange} placeholder="Age" />
                <select name="gender" value={student.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" />
                <input type="tel" name="phone" value={student.phone} onChange={handleChange} placeholder="Phone" required />
                <input type="number" name="cgpa" value={student.cgpa} onChange={handleChange} placeholder="CGPA" step="0.01" />
                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" name="placed" checked={student.placed} onChange={handleChange} />
                        Placed
                    </label>
                </div>
                {student.placed && (
                    <input type="text" name="company" value={student.company} onChange={handleChange} placeholder="Company" />
                )}
                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" name="historyOfArrears" checked={student.historyOfArrears} onChange={handleChange} />
                        History of Arrears
                    </label>
                </div>
                <button type="submit" className="submit-btn">Add Student</button>
            </form>
        </div>
    );
}