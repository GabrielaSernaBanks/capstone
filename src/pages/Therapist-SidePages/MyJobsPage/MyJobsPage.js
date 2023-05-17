import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import MyJobDetails from "../../../components/MyJobDetailsComponent/MyJobDetails";
import './MyJobsPage.scss'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import MyJobDetailsPage from "../MyJobDetailsPage/MyJobDetailsPage";

const port = process.env.REACT_APP_API_URL;

function MyJobs() {

const {therapist_id} = useParams();
const [therapistID, setTherapistID] = useState(`${therapist_id}`);
const [therapistDetails, setTherapistDetails] = useState({})

useEffect(() =>{
	axios.get(`${port}/therapists/${therapist_id}`)
		.then(response =>{
			setTherapistDetails(response.data);

		})
		.catch(error => {
			console.error(error);
	});
}, []);

	return (

		<div >
			<Nav />
			<div className="myjobpage">
				<section className="myjobpage__container" >
					<div className="myjobpage__therapist">
						<p className="myjobpage__therapist-name">{therapistDetails.first_name} {therapistDetails.last_name}</p>
						<p className="myjobpage__therapist-title">SPEECH LANGUAGE PATHOLOGIST</p>
						<p className="myjobpage__therapist-email">EMAIL: {therapistDetails.email}</p>
						<p className="myjobpage__therapist-id">License Number: {therapistDetails.license_number}</p>
					</div>
				</section>
	

			<h2 className="myjobspage-header">My Jobs</h2>

			{<MyJobDetails therapistID={therapistID} />}
			</div>

			<Footer therapistID={therapistID}/>


		</div>
	);
}

export default MyJobs;