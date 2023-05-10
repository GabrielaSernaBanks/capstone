import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TherapistHomePage from './pages/Therapist-SidePages/TherapistHomePage/TherapistHome';
import JobPostDetails from './components/TherapistJobPostDetails/TherapistJobPostDetails';
import MyJobs from './pages/Therapist-SidePages/MyJobsPage/MyJobsPage';
import MyJobDetails from './pages/Therapist-SidePages/MyJobDetailsPage/MyJobDetails';
import EditTherapistPage from './pages/Therapist-SidePages/EditTherapistPage/EditTherapistPage';


function App() {
	return (
		<div >
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage/>} />
					<Route path='/therapist' element={<TherapistHomePage/>} />
					<Route path='/jobdetails' element={<JobPostDetails/>} />
					<Route path='/myjobs' element={<MyJobs/>} />
					<Route path='/myjobdetails' element={<MyJobDetails/>} />
					<Route path='/edittherapist' element={<EditTherapistPage/>} />



				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
