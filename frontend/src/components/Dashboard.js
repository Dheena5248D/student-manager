import React from 'react';
// import './Dashboard.css';    
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStudents } from '../actions/studentActions';
import { useNavigate } from 'react-router';

export default function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddStudentClick = () => {
        navigate('/add-student');  
    };
    const handleArrowClick = (student) => {
        navigate(`/student/${student}`);
    }

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch])
    const students = useSelector((state) => state.studentReducer.students);
    return (
        <div className="container">
            <h1>Welcome!</h1>
            <p>the students that appear green are already placed</p>
            <div className="content">
                <div className="sidebar"></div>
                <div className="main-content">
                    <div className="add-student">
                        <button onClick={handleAddStudentClick} className="add-student-btn">add student</button>
                    </div>
                    <ul className="student-list">
                        {students && students.map((students) => (
                            <li key={students.name}
                            className={students.placed ? "green" : "student-item"}>
                                <div className="student-info">
                                    <strong>{students.name}:</strong><br/>
                                    <p>{students.regNumber}</p> phone no: {students.phone}
                                </div>
                                <button onClick={() => handleArrowClick(students._id)} className="arrow-button">→</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}