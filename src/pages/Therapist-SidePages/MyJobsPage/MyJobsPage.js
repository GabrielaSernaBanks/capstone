import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import therapistInfo from '../../../data/therapists.json'
import MyJobDetails from "../../../components/MyJobDetails/MyJobDetails";
import './MyJobsPage.scss'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';




function MyJobs() {

const {therapist_id} = useParams();

const [therapistDetails, setTherapistDetails] = useState({})

useEffect(() =>{
	axios.get(`http://localhost:8080/api/therapists/${therapist_id}`)
		.then(response =>{
			setTherapistDetails(response.data);
			console.log(response.data)

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

			{<MyJobDetails therapistDetails={therapistDetails} />}
			</div>

			<Footer />


		</div>
	);
}

export default MyJobs;