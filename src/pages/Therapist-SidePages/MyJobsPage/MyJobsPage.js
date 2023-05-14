import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import therapistInfo from '../../../data/therapists.json'
import MyJobDetails from "../../../components/MyJobDetails/MyJobDetails";
import './MyJobsPage.scss'

{/* <Route path='/myjobs/:therapist_id' element={<MyJobs />} /> */ }




function MyJobs() {
	return (

		<div >
			<Nav />
			<div className="myjobpage">
			{therapistInfo.map((therapist) => (
				<section className="myjobpage__container" >
					<div className="myjobpage__therapist">
						<p className="myjobpage__therapist-name">{therapist.first_name} {therapist.last_name}</p>
						<p className="myjobpage__therapist-title">SPEECH LANGUAGE PATHOLOGIST</p>
						<p className="myjobpage__therapist-email">EMAIL: {therapist.email}</p>
						<p className="myjobpage__therapist-id">ID: {therapist.therapist_id}</p>
					</div>
				</section>
			)
			)}

			<h2 className="myjobspage-header">My Jobs</h2>

			{<MyJobDetails />}
			</div>

			<Footer />


		</div>
	);
}

export default MyJobs;