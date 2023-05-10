import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TherapistHomePage from './pages/Therapist-SidePages/TherapistHomePage/TherapistHome';
import JobPostDetails from './components/TherapistJobPostDetails/TherapistJobPostDetails';
import MyJobs from './pages/Therapist-SidePages/MyJobsPage/MyJobsPage';
import MyJobDetails from './pages/Therapist-SidePages/MyJobDetailsPage/MyJobDetails';
import EditTherapistPage from './pages/Therapist-SidePages/EditTherapistPage/EditTherapistPage';
import SchoolHomePage from './pages/School-SidePages/SchoolHomePage/SchoolHomePage';
import AssignedCasesPage from './pages/School-SidePages/AssignedCasesPage/AssignedCasesPage';
import EditSchoolPage from './pages/School-SidePages/EditSchoolPage/EditSchoolPage';
import ActiveCaseDetails from './pages/School-SidePages/ActiveCaseDetailPage/ActiveCaseDetailPage';
import CompletedCasesPage from './pages/School-SidePages/CompletedJobsPage/CompletedJobsPage';
import AssignedCaseDetails from './pages/School-SidePages/AssignedCaseDetailsPage/AssignedCaseDetailsPage';
import CompleteCaseDetails from './pages/School-SidePages/CompleteCaseDetailsPage/CompleteCaseDetailsPage';
import AddCasePage from './pages/School-SidePages/AddCasePage/AddCasePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisPage from './pages/RegisPage/RegisPage';


function App() {
	return (
		<div >
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisPage />} />
					<Route path='/therapisthome' element={<TherapistHomePage />} />
					<Route path='/jobdetails' element={<JobPostDetails />} />
					<Route path='/myjobs' element={<MyJobs />} />
					<Route path='/myjobdetails' element={<MyJobDetails />} />
					<Route path='/edittherapist' element={<EditTherapistPage />} />
					<Route path='/schoolhome' element={<SchoolHomePage />} />
					<Route path='/assignedcases' element={<AssignedCasesPage />} />
					<Route path='/completedcases' element={<CompletedCasesPage />} />
					<Route path='/editschool' element={<EditSchoolPage />} />
					<Route path='/activecasedetail' element={<ActiveCaseDetails />} />
					<Route path='/assignedcasedetail' element={<AssignedCaseDetails />} />
					<Route path='/completecasedetail' element={<CompleteCaseDetails />} />
					<Route path='/addcase' element={<AddCasePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
