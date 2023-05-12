import './TherapistJobPost.scss';
import cases from '../../data/cases.json';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function TherapistJobPost() {
	const [schoolIndex, setSchoolIndex] = useState([]);

	return (

		<div>
			{cases.map((jobpost) => (
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