import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import cases from '../../../data/cases.json';
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";



function MyJobDetails() {
	const {case_id} =useParams();
	const details = require('../../../data/cases.json');
	const jobDetails = details.find((jobDetails) => jobDetails.case_id === case_id);
	return (


		<div >
			<Nav />
	
				<div className="jobdetails">
					<h2 className="jobdetails__school">{jobDetails.school_name}</h2>
					<section >
						<p className="jobdetails__adress">Address:</p>
						<p className="jobdetails__adress-info">{jobDetails.school_address}</p>
					</section>

					<section>
						<div >
							<p className="jobdetails__date">Date Posted</p>
							<p className="jobdetails__date-info">{jobDetails.date_posted}</p>
						</div>
						<div>
							<p className="jobdetails__type">Type:</p>
							<p className="jobdetails__type-info">{jobDetails.type}</p>
						</div>
					</section>

					<section className="studentInfo">
						<p className="studentInfo__header">Student Information</p>
						<p className="studentinfo__id">ID: {jobDetails.student_id}</p>
						<p className="studentinfo__date">DOB: {jobDetails.student_dob}</p>
						<p className="studentinfo__grade">Grade level: {jobDetails.student_grade}</p>
					</section>

					<div className="jobButtons">
						<button className="jobButtons__completed">COMPLETED</button>
						<button className="studentinfo__remove">REMOVE</button>
					</div>

				</div>


			<Footer />
		</div>
	);
}

export default MyJobDetails;