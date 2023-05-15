import './TherapistJobPost.scss';
import cases from '../../data/cases.json';
// import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


function TherapistJobPost() {


	const [jobs, setJobs] = useState([]);

	useEffect(() =>{
		axios.get('http://localhost:8080/api/cases')
			.then(response =>{
				setJobs(response.data);
				console.log(response.data)

			})
			.catch(error => {
				console.error(error);
		});
	}, []);


	return (

		<div>
			{jobs.map((jobpost) => (
				<section className='jobpost'>
					<p className='jobpost__header'>{jobpost.school_name}</p>
					<div className='jobpost__info'>
						<p className='jobpost__type'>{jobpost.type}</p>
						<p className='jobpost__date'>{jobpost.date_posted}</p>
						<section>
							<Link to={`/jobdetails/${jobpost.case_id}`}>
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