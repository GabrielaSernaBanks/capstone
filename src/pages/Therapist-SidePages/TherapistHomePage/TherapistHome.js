import Footer from "../../../components/Footer/Footer";
import TherapistJobPost from "../../../components/TherapistJobPost/TherapistJobPost";
import Nav from "../../../components/Nav/Nav";
import './TherapistHome.scss'
import { Navigate } from "react-router-dom";


function TherapistHome() {



return sessionStorage.token ? (
	<div>
	<Nav />
	<div className="therapisthome">
		<header >
			<h2 className="therapisthome__header">Welcome Back, Therapist Name</h2>
		</header>
		<section className="therapisthome__post">
			<TherapistJobPost />
		</section>
	</div>
	<Footer />
</div>

) : (
	<Navigate to="/home"/>
)

}

export default TherapistHome;