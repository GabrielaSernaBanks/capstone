import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TherapistHome from './pages/TherapistHomePage/TherapistHome';
import JobPostDetails from './components/JobPostDetails/JobPostDetails';
import MyJobs from './pages/MyJobs/MyJobs';


function App() {
	return (
		<div >
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage/>} />
					<Route path='/therapist' element={<TherapistHome/>} />
					<Route path='/jobdetails' element={<JobPostDetails/>} />
					<Route path='/myjobs' element={<MyJobs/>} />

				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
