
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import SchoolJobPost from "../../../components/SchoolJobPost/SchoolJobPost";
import AddIcon from '../../../assets/add.svg';


function SchoolHomePage() {
	return (
	
		<div >
		<Nav/>
    <div>
				<button >Active Cases</button>
				<button>Assigned Cases</button>
        <button>Completed Cases</button>

			</div>
			<div >
				<img className="school__icon" src={AddIcon}/>
			</div>
			<h2>Welcome Back, School Name</h2>
      <SchoolJobPost/>
		<Footer/>


		</div>
	);
}

export default SchoolHomePage;