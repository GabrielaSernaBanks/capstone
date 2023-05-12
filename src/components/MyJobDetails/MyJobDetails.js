import './MyJobDetails.scss';
import cases from '../../data/cases.json';




function MyJobDetails() {
	return (


		<>
			
			<h2></h2>
			<section>
				<p>Address:</p>
				<p>10250 SW 57th Avenue, Pinecrest, FL 33156</p>
			</section>
			<section>
				<div>
					<p>Date Posted</p>
					<p>May 23, 2023</p>
				</div>
				<div>
					<p>Type:</p>
					<p>Evaluation</p>
				</div>
			</section>
			<section>
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