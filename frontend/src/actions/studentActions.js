import {
    getStudentsRequest,
    getStudentsSuccess,
    getStudentsFailure,
    addStudentRequest,
    addStudentSuccess,
    addStudentFailure,
    getStudentDetails,
    getStudentDetailsFailure,
    updateStudentRequest,
    updateStudentSuccess,
    updateStudentFailure
} from '../slices/studentSlice';
import axios from 'axios';

export const getStudents = () => async (dispatch) => {
    dispatch(getStudentsRequest());
    try {
        const response = await axios.get('/api/getstudents');
        dispatch(getStudentsSuccess(response.data));
    } catch (error) {
        dispatch(getStudentsFailure(error.response.data));
    }
}

export const addStudent = (student) => async (dispatch) => {
    dispatch(addStudentRequest());
    try {
        const response = await axios.post('/api/addstudent', student);
        dispatch(addStudentSuccess(response.data));
    } catch (error) {
        dispatch(addStudentFailure(error.response.data));
    }
}

export const getStudentInfo = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`/api/getstudent/${id}`);
        dispatch(getStudentDetails(response.data));
    } catch (error) {
        dispatch(getStudentDetailsFailure(error.response.data));
    }
}

export const updateStudent = (student, id) => async (dispatch) => {
    dispatch(updateStudentRequest());
    try {
        const response = await axios.put(`/api/updatestudent/${id}`, student);
        dispatch(updateStudentSuccess(response.data));
    } catch (error) {
        dispatch(updateStudentFailure(error.response.data));
    }
}
