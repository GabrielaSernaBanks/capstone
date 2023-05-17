import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TherapistHomePage from './pages/Therapist-SidePages/TherapistHomePage/TherapistHome';
import MyJobs from './pages/Therapist-SidePages/MyJobsPage/MyJobsPage';
import MyJobDetails from './pages/Therapist-SidePages/MyJobDetailsPage/MyJobDetailsPage';
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
import SingleJobDetails from './pages/Therapist-SidePages/SingleJobDetails/SingleJobDetails';
import MyJobDetailsPage from './pages/Therapist-SidePages/MyJobDetailsPage/MyJobDetailsPage';
 

function App() {

	return (
		<div >
			<BrowserRouter>

				<Routes>
				<Route exact path='/' element={<HomePage />} />
					<Route exact path='/home' element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisPage />} />
					<Route path='/therapisthome/:therapist_id' element={<TherapistHomePage />} />
					<Route path='/jobdetails/:case_id' element={<SingleJobDetails />} />
					<Route path='/myjobs/:therapist_id' element={<MyJobs />} />
					<Route path='/myjobdetails/:therapistID/:case_id' element={<MyJobDetailsPage />} />
					<Route path='/edittherapist/:therapist_id' element={<EditTherapistPage />} />
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
