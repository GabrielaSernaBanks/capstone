import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";



function MyJobDetails() {
	return (

		<div >
			<Nav />
			<h2>Job Details</h2>
			<h2>PINECREST ELEMENTARY SCHOOL</h2>
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
				<button>COMPLETED</button>
				<button>REMOVE</button>
			</div>
			<Footer />


		</div>
	);
}

export default MyJobDetails;