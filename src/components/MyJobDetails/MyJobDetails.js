import './MyJobDetails.scss';
import cases from '../../data/cases.json';

function MyJobDetails( {therapistDetails}) {

	console.log(therapistDetails.id)

	return (
		<>	
			
			<header className='myjobdetails'>
			<h2 className='myjobdetails__header'>PINECREST ELEMENTARY</h2>
			</header>

			<section className='myjobdetails-info'>
				<p className='myjobdetails-info__address-header'>Address:</p>
				<p className='myjobdetails-info__address'>10250 SW 57th Avenue, Pinecrest, FL 33156</p>
			</section>
			<section className='myjobdetails-info2'>
				<div className='myjobdetails-info2__date-details'>
					<p className='myjobdetails-info2__date-header'>Date Posted</p>
					<p className='myjobdetails-info2__date'>May 23, 2023</p>
				</div>
				<div className='myjobdetails-type__details'>
					<p className='myjobdetails-type__header'>Type:</p>
					<p className='myjobdetails-type'>Evaluation</p>
				</div>
			</section>
			<section className='myjobdetails__student'>
				<p>Student Information</p>
				<p>ID: 0123456</p>
				<p>DOB: 03-31-2016</p>
				<p>Grade level: 2</p>
			</section>
			
			<div>
				<button >VIEW DETAILS</button>
			</div>

		</>
	);
}

export default MyJobDetails;