import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import './SingleJobDetails.scss';
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const port = process.env.REACT_APP_API_URL;


function SingleJobDetails(props) {

	const navigate = useNavigate();
	const location = useLocation();
	const therapistID = location.state;

	const { case_id } = useParams();
	const [job, setJob] = useState({});

	useEffect(() => {
		axios.get(`${port}/cases/case/${case_id}`)
			.then(response => {
				setJob(response.data[0]);
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	//i need help with the backend PUT request for this
	const submitHandler = (e) => {
		e.preventDefault();
		const userData = {
			therapist_id: therapistID,
		};
		axios.put(`${port}/cases/changecase/${case_id}`, userData)
			.then((response) => {
				console.log(response.status, response.data)
				alert('You just added this job to your list!')
				navigate(`/myjobs/${therapistID}`)
			})
			.catch(error => {
				console.error(error);
			});

	};


	return sessionStorage.token ? (

		<div

		>
			<Nav />

			<m.div className="jobdetails"
				animate={{ y: "0%" }}
				exit={{ opacity: 1 }}
				initial={{ y: "100%" }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<m.header className='jobdetails__header'
					animate={{ y: 0 }}
					initial={{ y: "100%" }}
					transition={{ duration: 0.5,  ease: "easeOut"  }}
				>
					<h2>{job.school_name}</h2>
				</m.header>

				<m.section
					// variants={container}
					initial="hidden"
					animate="show"
					className="jobdetails__address">
					<p className="jobdetails__address-header">ADDRESS:</p>
					<p className="jobdetails__address-info">{job.school_address}</p>
				</m.section>

				<section className="jobdetails__info">
					<div className="jobdetails__info-date">
						<p className="jobdetails__info-date-header">DATE POSTED</p>
						<p className="jobdetails__info-date-info">{job.date_posted}</p>
					</div>
					<div className="jobdetails__info-type">
						<p className="jobdetails__info-type-header">TYPE</p>
						<p className="jobdetails__info-type-info">{job.type}</p>
					</div>
				</section>

				<section className="jobdetails__student">
					<p className="jobdetails__student-header">STUDENT INFORMATION</p>
					<p className="jobdetails__student-id">ID Number: {job.student_id}</p>
					<p className="jobdetails__student-dob">Date of Birth: {job.student_dob}</p>
					<p className="jobdetails__student-grade">Grade Level: {job.student_grade}</p>
				</section>
				<AnimatePresence initial={false}>
				<div className="jobdetails-buttons">
					<button className="jobdetails-buttons__accept" onClick={submitHandler}>ACCEPT JOB</button>
					<Link to={`/therapisthome/${therapistID}`}>
						<button className="jobdetails-buttons__goback">GO BACK</button>
					</Link>
				</div>
				</AnimatePresence>

			</m.div>
			<Footer therapistID={therapistID} />
		</div>
	) : (
		<Navigate to="/home" />

	);
}

export default SingleJobDetails;