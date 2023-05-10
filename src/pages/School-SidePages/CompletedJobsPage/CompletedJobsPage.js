
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import SchoolJobPost from "../../../components/SchoolJobPost/SchoolJobPost";



function CompletedCasesPage() {
	return (
	
		<div >
		<Nav/>
    <div>
				<button >Active Cases</button>
				<button>Assigned Cases</button>
        <button>Completed Cases</button>

			</div>
			<h2>Welcome Back, School Name These are COMPLETED</h2>
      <SchoolJobPost/>
		<Footer/>


		</div>
	);
}

export default CompletedCasesPage;