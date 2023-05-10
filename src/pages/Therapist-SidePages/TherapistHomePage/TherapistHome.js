import Footer from "../../../components/Footer/Footer";
import TherapistJobPost from "../../../components/TherapistJobPost/TherapistJobPost";
import Nav from "../../../components/Nav/Nav";
import './TherapistHome.scss'



function TherapistHome() {
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
	);
}

export default TherapistHome;