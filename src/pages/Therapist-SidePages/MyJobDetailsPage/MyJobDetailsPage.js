import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { Link, useParams, useLocation } from "react-router-dom";

function MyJobDetailsPage(props) {

	const location = useLocation();
	const caseID = location.state;
	const { therapistID } = useParams();
	const [job, setJob] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:8080/api/cases/case/${therapistID}/${caseID}`)
			.then(response => {
				setJob(response.data[0]);
				console.log(response.data[0])
			})
			.catch(error => {
				console.error(error);
			});
	}, []);
	return (

		<div >
			<Nav />

			<div className="jobdetails">
				<h2 className="jobdetails__school">{job.school_name}</h2>
				<section >
					<p className="jobdetails__adress">Address:</p>
					<p className="jobdetails__adress-info">{job.school_address}</p>
				</section>

				<section>
					<div >
						<p className="jobdetails__date">Date Posted</p>
						<p className="jobdetails__date-info">{job.date_posted}</p>
					</div>
					<div>
						<p className="jobdetails__type">Type:</p>
						<p className="jobdetails__type-info">{job.type}</p>
					</div>
				</section>

				<section className="studentInfo">
					<p className="studentInfo__header">Student Information</p>
					<p className="studentinfo__id">ID: {job.student_id}</p>
					<p className="studentinfo__date">DOB: {job.student_dob}</p>
					<p className="studentinfo__grade">Grade level: {job.student_grade}</p>
				</section>

				<div className="jobButtons">
					<Link to={`/myjobs/${therapistID}`}>
						<button className="jobButtons__completed">COMPLETED</button>
					</Link>
					<Link to={`/myjobs/${therapistID}`}>
						<button className="studentinfo__remove">REMOVE</button>
					</Link>
				</div>

			</div>


			<Footer />
		</div>
	);
}

export default MyJobDetailsPage;