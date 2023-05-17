import './TherapistJobPost.scss';
// import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
const port = process.env.REACT_APP_API_URL;


function TherapistJobPost({ therapistID }) {
	const [jobs, setJobs] = useState([]);
	const [therapist__id] = useState(therapistID)


	useEffect(() => {
		axios.get(`${port}/cases`)
			.then(response => {
				setJobs(response.data);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);


	return (

		<div>
			{jobs.map((jobpost) => (
				<section className='jobpost'>
					<div>
						<p className='jobpost__header'>{jobpost.school_name}</p>
						<p className='jobpost__type'>Type: {jobpost.type}</p>

					</div>
					<div className='jobpost__info'>
						<p className='jobpost__date'>Date Posted:{jobpost.date_posted}</p>
						<section>
							<Link to={`/jobdetails/${jobpost.case_id}`} state={therapist__id}>
								<button className='jobpost__button' >View Details</button>
							</Link>
						</section>
					</div>
				</section>
			)
			)}
		</div>
	);
}

export default TherapistJobPost;