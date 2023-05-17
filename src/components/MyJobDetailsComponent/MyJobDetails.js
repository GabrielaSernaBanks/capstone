import './MyJobDetails.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


function MyJobDetails({ therapistID, case_id }) {

	const [jobs, setJobs] = useState([]);
	const port = process.env.REACT_APP_API_URL;

	useEffect(() => {
		axios.get(`${port}/cases/${therapistID}`)
			.then(response => {
				setJobs(response.data);

			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	return (
		<>

			<div className='container'>
				{jobs.map((jobpost) => (
					<section className='myjobpost'>
						<div>
							<p className='myjobpost__header'>{jobpost.school_name}</p>
							<p className='myjobpost__type'>Type: {jobpost.type}</p>
						</div>
						<div className='myjobpost__info'>
							<p className='myjobpost__date'>{jobpost.date_posted}</p>
							<section>
								<Link to={`/myjobdetails/${therapistID}/${jobpost.case_id}`} state={jobpost.case_id} >
									<button className='myjobpost__button' >View Details</button>
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