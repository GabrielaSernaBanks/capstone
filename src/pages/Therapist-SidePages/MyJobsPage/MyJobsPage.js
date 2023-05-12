import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import cases from '../../../data/cases.json';
import therapistInfo from '../../../data/therapists.json'
import MyJobDetails from "../../../components/MyJobDetails/MyJobDetails";


{/* <Route path='/myjobs/:therapist_id' element={<MyJobs />} /> */ }



function MyJobs() {
	return (

		<div >
			<Nav />
			{therapistInfo.map((therapist) => (
				<section>
					<div>
						<p>{therapist.first_name} {therapist.last_name}</p>
						<p>SPEECH LANGUAGE PATHOLOGIST</p>
						<p>EMAIL: {therapist.email}</p>
						<p>ID: {therapist.therapist_id}</p>
					</div>
				</section>
			)
			)}

			<h2>My Jobs</h2>

			{<MyJobDetails />}

			<Footer />


		</div>
	);
}

export default MyJobs;