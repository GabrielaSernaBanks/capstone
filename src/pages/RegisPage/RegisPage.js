import "./RegisPage.scss";
import regisicon from "../../assets/register.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function RegisPage() {
	// const baseURL = 'http://localhost:8080/api/therapists/';

	let navigate = useNavigate();

	const [first_name, setFirstName] = useState("")
	const [last_name, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [license_number, setLicense] = useState(1)

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
		axios.post("http://localhost:8080/api/therapists/signup", userData)
			.then((response) => {
				console.log(response.status, response.data)
				navigate('/login')

			})
			.catch(error => {
				console.error(error);
			});
		};

		// axios
		// 	.post("http://localhost:8080/api/therapists/", {
		// 		method: "POST",
		// 		body: JSON.stringify({
		// 			first_name: first_name,
		// 			last_name: last_name,
		// 			license_number: license_number,
		// 			email: email,
		// 			password: password,
		// 		}),
		// 		headers: { "Content-Type": "application/json" },
		// 	}
		// 		.then((response) => {
		// 			setEmail(''),
		// 				setFirstName(''),
		// 				setLastName(''),
		// 				setPassword(''),
		// 				setLicense(1)
		// 			console.log(response);
		// 		})
		// 		.catch((error) => {
		// 			console.log(error);
		// 		});



		// navigate('/login')


	return (
		<>
			<section className="regis">
				<h1 className="regis__header">Registration</h1>
				<image className="regis__image" src={regisicon} />

				<form onSubmit={submitHandler}>
					<input 
					value={first_name} 
					placeholder="First Name" 
					type="text" 
					onChange={handleFirstName} 
					/>
					<input value={last_name} placeholder="Last Name" type="text" onChange={handleLastName} />
					<input
						placeholder="License Number"
						type="text"
						value={license_number}
						onChange={handleLicense}
					/>
					<input 
					value={email} 
					placeholder="Email" 
					type="email" 
					onChange={handleEmail} 
					/>
					<input
						placeholder="Password"
						type="password"
						value={password}
						onChange={handlePassword}
					/>
					Password
					<div className="regis__buttons">
						<button type="sumbit" className="regis__buttons-submit">
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default RegisPage;
