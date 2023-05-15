import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {

	let navigate = useNavigate();

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [stateToken, setToken] = useState("")

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const userData = {
			email: email,
			password: password,

		};
		axios.post("http://localhost:8080/api/therapists/login", userData)
			.then((response) => {
				console.log(response.data)
				sessionStorage.token = response.data.token
				setToken(response.data.token)
			})
			.catch(error => {
				console.error(error);
			});
			navigate('/therapisthome')
	};

	console.log(stateToken)


	return (
		<section className='loginpage'>
			<form
			onSubmit={submitHandler}
			>
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

				<div className="regis__buttons">
					<button type="sumbit" className="regis__buttons-submit">
						Submit
					</button>
				</div>
			</form>

		</section>
	);
};

export default LoginPage;