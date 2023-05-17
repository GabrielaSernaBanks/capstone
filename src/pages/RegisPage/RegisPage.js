import "./RegisPage.scss";
import regisicon from "../../assets/regis.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
const port = process.env.REACT_APP_API_URL;

function RegisPage() {

	let navigate = useNavigate();

	const [first_name, setFirstName] = useState("")
	const [last_name, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [license_number, setLicense] = useState("")

	const handleFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const handleLastName = (e) => {
		setLastName(e.target.value);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleLicense = (e) => {
		setLicense(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const userData = {
			email: email,
			password: password,
			first_name: first_name,
			last_name: last_name,
			license_number: license_number
		};
		axios.post(`${port}/therapists/signup`, userData)
			.then((response) => {
				console.log(response.status, response.data)
				navigate('/login')

			})
			.catch(error => {
				console.error(error);
			});
	};


	return (

		<section className="registration-page">

			<article className="regis__image-container">
				<img className="regis__image" src={regisicon} />
			</article>
			<header>
				<h1 className="regis__header">Registration</h1>
			</header>

			<section className="regis-form">
			<form  onSubmit={submitHandler}>
				<input
					className="regis-form__first-name"
					value={first_name}
					placeholder="First Name"
					type="text"
					onChange={handleFirstName}
				/>
				<input className="regis-form__last-name" value={last_name} placeholder="Last Name" type="text" onChange={handleLastName} />
				<input
					className="regis-form__license"
					placeholder="License Number"
					type="text"
					value={license_number}
					onChange={handleLicense}
				/>
				<input
					className="regis-form__email"
					value={email}
					placeholder="Email"
					type="email"
					onChange={handleEmail}
				/>
				<input
					className="regis-form__password"
					placeholder="Password"
					type="password"
					value={password}
					onChange={handlePassword}
				/>
				<div className="regis__buttons">
					<button type="sumbit" className="regis__buttons-submit">
						SUBMIT
					</button>
					<Link to={`/home`}>
							<button type="submit" className="login__buttons-goback">
								GO BACK
							</button>
						</Link>
				</div>
			</form>
		</section>
		</section>

	);
}

export default RegisPage;
