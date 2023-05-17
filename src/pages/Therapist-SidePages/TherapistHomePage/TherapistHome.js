import Footer from "../../../components/Footer/Footer";
import TherapistJobPost from "../../../components/TherapistJobPost/TherapistJobPost";
import Nav from "../../../components/Nav/Nav";
import './TherapistHome.scss'
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const port = process.env.REACT_APP_API_URL;

function TherapistHome() {

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

	return sessionStorage.token ? (
		<>
			<Nav/>
			<div className="therapisthome">
				<header >
					<h2 className="therapisthome__header">Welcome Back, {therapistDetails.first_name}</h2>
				</header>

			
				<section className="therapisthome__post">
					<TherapistJobPost therapistID={therapistID}/>
				</section>

			</div>

			<Footer therapistID={therapistID} />
		</>

	) : (
		<Navigate to="/home" />
	)

}

export default TherapistHome;