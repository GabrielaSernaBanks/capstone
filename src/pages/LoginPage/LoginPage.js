import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './LoginPage.scss';
import LoginImage from '../../assets/login.svg';

const LoginPage = () => {

	const navigate = useNavigate();

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
				console.log(response.status, response.data)
				sessionStorage.token = response.data.token
				setToken(response.data.token)
				navigate(`/therapisthome/${response.data.user.id}`)
			})
			.catch(error => {
				console.error(error);
			});

	};

	console.log(stateToken)


	return (
		<section className="login-page">
			<article className="loginIcon-container">
				<img className="loginIcon" src={LoginImage} />
			</article>
			<header>
				<h1 className="login-header">LOGIN</h1>
			</header>
			<section className='loginpage'>
				<form
					onSubmit={submitHandler}
				>
					<input
						className="loginpage__email"
						value={email}
						placeholder="Email"
						type="email"
						onChange={handleEmail}
					/>
					<input
						className="loginpage__password"
						placeholder="Password"
						type="password"
						value={password}
						onChange={handlePassword}
					/>

					<div className="login__buttons">
						<button type="submit" className="login__buttons-submit">
							Submit
						</button>
					</div>
				</form>

			</section>
		</section>
	);
};

export default LoginPage;