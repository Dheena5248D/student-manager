import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentInfo } from '../actions/studentActions';
import { useParams } from 'react-router-dom';


export default function StudentList() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        // Dispatch action to fetch student details when component mounts
        dispatch(getStudentInfo(id));
    }, [dispatch]);

    const { studentDetails, error } = useSelector((state) => state.studentReducer);
    

    console.log('Student Details:', studentDetails);

    return (
        <div className="student-details-fullscreen">
            <h1>Student Details</h1>
            {studentDetails ? (
                <div className="student-info-grid">
                    <div className="info-item">
                        <label>Name:</label>
                        <span>{studentDetails.name}</span>
                    </div>
                    <div className="info-item">
                        <label>Reg Number:</label>
                        <span>{studentDetails.regNumber}</span>
                    </div>
                    <div className="info-item">
                        <label>Age:</label>
                        <span>{studentDetails.age}</span>
                    </div>
                    <div className="info-item">
                        <label>Gender:</label>
                        <span>{studentDetails.gender}</span>
                    </div>
                    <div className="info-item">
                        <label>Email:</label>
                        <span>{studentDetails.email}</span>
                    </div>
                    <div className="info-item">
                        <label>Phone:</label>
                        <span>{studentDetails.phone}</span>
                    </div>
                    <div className="info-item">
                        <label>CGPA:</label>
                        <span>{studentDetails.cgpa.$numberDecimal}</span>
                    </div>
                    <div className={` ${studentDetails.placed ? 'green-info-item' : 'info-item'}`}>
                        <label>Placed:</label><br />
                        <span >{studentDetails.placed ? 'Yes' : 'No'}</span>
                    </div>
                    {studentDetails.placed && (
                        <div className="info-item">
                            <label>Company:</label>
                            <span>{studentDetails.company}</span>
                        </div>
                    )}
                    <div className="info-item">
                        <label>History of Arrears:</label>
                        <span>{studentDetails.historyOfArrears ? 'Yes' : 'No'}</span>
                    </div>
                </div>
            ) : (
                <p>Loading student details...</p>
            )}
        </div>
    );
}
