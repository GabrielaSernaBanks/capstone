import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import './MyJobDetailsPage.scss';
import { motion as m } from "framer-motion";

const port = process.env.REACT_APP_API_URL;

function MyJobDetailsPage(props) {

	const location = useLocation();
	const caseID = location.state;
	const { therapistID } = useParams();
	const [job, setJob] = useState([]);

	useEffect(() => {
		axios.get(`${port}/cases/case/${therapistID}/${caseID}`)
			.then(response => {
				setJob(response.data[0]);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);
	return (

		<div >
			<Nav />

			<m.div className="jobdetail"
							animate={{ y: "0%" }}
							exit={{ opacity: 1 }}
							initial={{ y: "100%" }}
							transition={{ duration: 0.5, ease: "easeOut" }}>
				<m.header className="school"
									animate={{ y: 0 }}
									initial={{ y: "100%" }}
									transition={{ duration: 0.5,  ease: "easeOut"  }}>
					<h2 className="jobdetail__school">{job.school_name}</h2>

				</m.header>
				<section className="jobdetail-address">
					<p className="jobdetail-address__title">Address:</p>
					<p className="jobdetail-address__info">{job.school_address}</p>
				</section>

				<section className="details">
					<div className="details-date">
						<p className="details-date__header">Date Posted</p>
						<p className="details-date__info">{job.date_posted}</p>
					</div>
					<div className="details-type">
						<p className="details-type__header">Type:</p>
						<p className="details-type__info">{job.type}</p>
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
						<button className="jobButtons__remove">REMOVE</button>
					</Link>
				</div>

			</m.div>


			<Footer />
		</div>
	);
}

export default MyJobDetailsPage;