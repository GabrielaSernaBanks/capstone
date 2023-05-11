import './TherapistJobPost.scss';
import cases from '../../data/cases.json';
import React, { useState } from "react";

function TherapistJobPost() {
	const [schoolIndex, setSchoolIndex] = useState([]);

	return (

		<div>
			{cases.map((jobpost) => (
				<section className='jobpost'>
					<p className='jobpost__header'>{jobpost.school_name}</p>
					<div className='jobpost__info'>
						<p className='jobpost__type'>Evaluation</p>
						<p className='jobpost__date'>05-23-23</p>

					<section>
						<button className='jobpost__button'>View Details</button>
					</section>
					</div>


				</section>
			)

			)}

		</div>

	);
}

export default TherapistJobPost;