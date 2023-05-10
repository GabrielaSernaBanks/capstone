import Footer from "../../../components/Footer/Footer";
import JobPost from "../../../components/TherapistJobPost/TherapistJobPost";
import Nav from "../../../components/Nav/Nav";




function MyJobs() {
	return (
	
		<div >
		<Nav/>
    <section>
      <div>
        <p>Blu Banks</p>
        <p>SPEECH LANGUAGE PATHOLOGIST</p>
        <p>blubanks@gmail.com</p>
        <p>ID: 654321</p>
      </div>
    </section>
			<h2>My Jobs</h2>
    
			<JobPost/>
		<Footer/>


		</div>
	);
}

export default MyJobs;