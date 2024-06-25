
import Login from './components/Login';
import Register from './components/Register';
import AddStudent from './components/AddStudent';
import StudentDetails from './components/StudentDetails';
import UpdateStudent from './components/UpdateStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router >
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-student' element={<AddStudent />} />
          <Route path='/student/:id' element={<StudentDetails />} />
          <Route path='/update-student' element={<UpdateStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
