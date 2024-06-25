import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentInfo } from '../actions/studentActions';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function StudentList() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        // Dispatch action to fetch student details when component mounts
        dispatch(getStudentInfo(id));
    }, [dispatch, id]);

    const { studentDetails } = useSelector((state) => state.studentReducer);
    
    const handleUpdateClick = () => {
        navigate('/update-student');
    }

    console.log('Student Details:', studentDetails);

    return (
        <div className="student-details-fullscreen">
            <h1>Student Details</h1>
            {studentDetails ? (
            <Fragment>
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
                        <span>{studentDetails.historyOfArrears ? 'Yes' : 'No'}</span><br /><br /><br />
                    </div>
                </div>
                <br /><br /><br /> <button onClick={handleUpdateClick} className="add-student-btn">update Details</button>

                </Fragment>
            ) : (
                <p>Loading student details...</p>
            )}
        </div>
    );
}
