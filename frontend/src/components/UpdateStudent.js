import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateStudent, deleteStudent } from '../actions/studentActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearStudentUpdated, clearStudentDeleted } from '../slices/studentSlice';

export default function AddStudent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, studentDetails, studentUpdated, studentDeleted } = useSelector((state) => state.studentReducer);

    useEffect(() => {
        if (error) {
            toast.error(error.message || 'An error occurred');
        }
    }, [error]);

    useEffect(() => {
        if (studentUpdated) {
            toast.success("Student data updated successfully!");
            dispatch(clearStudentUpdated());
            navigate('/dashboard');
        }
    }, [studentUpdated, navigate, dispatch]);

    useEffect(() => {
        if (studentDeleted) {
            toast.success("Student deleted successfully!");
            dispatch(clearStudentDeleted());
            navigate('/dashboard');
        }
    }, [studentDeleted, navigate, dispatch]);

    const [student, setStudent] = useState({
        name: studentDetails?.name || '',
        regNumber: studentDetails?.regNumber || '',
        age: studentDetails?.age || '',
        gender: studentDetails?.gender || '',
        email: studentDetails?.email || '',
        phone: studentDetails?.phone || '',
        cgpa: studentDetails?.cgpa || '',
        placed: studentDetails?.placed || false,
        company: studentDetails?.company || '',
        historyOfArrears: studentDetails?.historyOfArrears || false,
        id: studentDetails?._id || ''
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
        dispatch(updateStudent(student, student.id));
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this student?");
        if (confirmDelete) {
            dispatch(deleteStudent(student.id));
        }
    };

    return (
        <div className="add-student-container">
            <h2>Update Student Details</h2>
            <form onSubmit={handleSubmit} className="add-student-form">
                <input 
                    type="text" 
                    name="name" 
                    value={student.name} 
                    onChange={handleChange} 
                    placeholder="Name" 
                    required 
                    readOnly // Make this field read-only
                />
                <input 
                    type="text" 
                    name="regNumber" 
                    value={student.regNumber} 
                    onChange={handleChange} 
                    placeholder="Registration Number" 
                    required 
                    readOnly // Make this field read-only
                />
                <input 
                    type="number" 
                    name="age" 
                    value={student.age} 
                    onChange={handleChange} 
                    placeholder="Age" 
                />
                <select name="gender" value={student.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <input 
                    type="email" 
                    name="email" 
                    value={student.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    readOnly // Make this field read-only
                />
                <input 
                    type="tel" 
                    name="phone" 
                    value={student.phone} 
                    onChange={handleChange} 
                    placeholder="Phone" 
                    required 
                />
                <input 
                    type="number" 
                    name="cgpa" 
                    value={student.cgpa} 
                    onChange={handleChange} 
                    placeholder="CGPA" 
                    step="0.01" 
                />
                <div className="checkbox-group">
                    <label>
                        <input 
                            type="checkbox" 
                            name="placed" 
                            checked={student.placed} 
                            onChange={handleChange} 
                        />
                        Placed
                    </label>
                </div>
                {student.placed && (
                    <input 
                        type="text" 
                        name="company" 
                        value={student.company} 
                        onChange={handleChange} 
                        placeholder="Company" 
                    />
                )}
                <div className="checkbox-group">
                    <label>
                        <input 
                            type="checkbox" 
                            name="historyOfArrears" 
                            checked={student.historyOfArrears} 
                            onChange={handleChange} 
                        />
                        History of Arrears
                    </label>
                </div>
                <button type="submit" className="submit-btn">Update Student Details</button>
                <button type="button" className="delete-btn" onClick={handleDelete}>Delete Student</button>
            </form>
        </div>
    );
}
