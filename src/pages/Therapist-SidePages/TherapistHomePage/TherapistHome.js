import Footer from "../../../components/Footer/Footer";
import TherapistJobPost from "../../../components/TherapistJobPost/TherapistJobPost";
import Nav from "../../../components/Nav/Nav";
import './TherapistHome.scss'
import { useNavigate } from "react-router-dom";


function TherapistHome() {

const navigate = useNavigate();

	const token = window.sessionStorage.getItem('token');
	console.log("this is the token", token)

if (!token) {
	return navigate("/home")
}
return (
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

)

}

export default TherapistHome;