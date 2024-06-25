import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
    name: 'student',
    initialState: {
        students: [],
        loading: false,
        error: null,
        studentAdded: false,
        studentDetails: null,
        studentUpdated: false
    },
    reducers: {
        getStudentsRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.students = [];
        },
        getStudentsSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.students = action.payload;
        },
        getStudentsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.students = [];
        },
        addStudentRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.studentAdded = false;
        },
        addStudentSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.students.push(action.payload);
            state.studentAdded = true;
        },
        addStudentFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.studentAdded = false;
        },
        clearStudentAdded: (state) => {
            state.studentAdded = false;
        },
        getStudentDetails: (state, action) => {
            state.studentDetails = action.payload;
        },
        getStudentDetailsFailure: (state, action) => {
            state.studentDetails = null;
            state.error = action.payload;
        },
        updateStudentRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.studentUpdated = false;
        },
        updateStudentSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.studentUpdated = true;
            
            const index = state.students.findIndex(student => student.id === action.payload.id);
            if (index !== -1) {
                state.students[index] = action.payload;
            }
        },
        updateStudentFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.studentUpdated = false;
        },
        clearStudentUpdated: (state) => {
            state.studentUpdated = false;
        },
    }
});

export const {
    getStudentsRequest,
    getStudentsSuccess,
    getStudentsFailure,
    addStudentRequest,
    addStudentSuccess,
    addStudentFailure,
    clearStudentAdded,
    getStudentDetails,
    getStudentDetailsFailure,
    updateStudentRequest,
    updateStudentSuccess,
    updateStudentFailure,
    clearStudentUpdated
} = studentSlice.actions;

export default studentSlice.reducer;
