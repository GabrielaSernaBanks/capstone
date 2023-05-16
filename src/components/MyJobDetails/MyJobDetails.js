import './MyJobDetails.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function MyJobDetails({ therapistID, case_id }) {

	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:8080/api/cases/${therapistID}`)
			.then(response => {
				setJobs(response.data);
				console.log(response.data)

			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	return (
		<>

			<div>
				{jobs.map((jobpost) => (
					<section className='jobpost'>
						<div>
							<p className='jobpost__header'>{jobpost.school_name}</p>
							<p className='jobpost__type'>Type: {jobpost.type}</p>

						</div>
						<div className='jobpost__info'>
							<p className='jobpost__date'>{jobpost.date_posted}</p>
							<section>
								<Link to={`/myjobdetails/${therapistID}/${jobpost.case_id}`} state={jobpost.case_id} >
									<button className='jobpost__button' >View Details</button>
								</Link>
							</section>
						</div>
					</section>
				)
				)}
			</div>
		

		</>
	);
}

export default MyJobDetails;