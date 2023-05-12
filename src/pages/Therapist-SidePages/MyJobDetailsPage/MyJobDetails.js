import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import cases from '../../../data/cases.json';
import React, { useState } from "react";



function MyJobDetails() {

	return (
		<div >
			<Nav />
			{cases.map((jobdetails) => (
				<div className="jobdetails">
					<h2 className="jobdetails__school">{jobdetails.school_name}</h2>
					<section >
						<p className="jobdetails__adress">Address:</p>
						<p className="jobdetails__adress-info">{jobdetails.school_address}</p>
					</section>

					<section>
						<div >
							<p className="jobdetails__date">Date Posted</p>
							<p className="jobdetails__date-info">May 23, 2023</p>
						</div>
						<div>
							<p className="jobdetails__type">Type:</p>
							<p className="jobdetails__type-info">Evaluation</p>
						</div>
					</section>

					<section className="studentInfo">
						<p className="studentInfo__header">Student Information</p>
						<p className="studentinfo__id">ID: 0123456</p>
						<p className="studentinfo__date">DOB: 03-31-2016</p>
						<p className="studentinfo__grade">Grade level: 2</p>
					</section>

					<div className="jobButtons">
						<button className="jobButtons__completed">COMPLETED</button>
						<button className="studentinfo__remove">REMOVE</button>
					</div>

				</div>
				
			)
			)}

			<Footer />
		</div>
	);
}

export default MyJobDetails;