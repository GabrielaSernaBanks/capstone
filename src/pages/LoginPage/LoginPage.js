import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './LoginPage.scss';
import LoginImage from '../../assets/login2.svg';
import { Link } from 'react-router-dom';
const port = process.env.REACT_APP_API_URL;

const LoginPage = () => {

	const navigate = useNavigate();

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [stateToken, setToken] = useState("")
	const [formSumbission, setFormSubmission] = useState(false);

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
		if (email && password){
		axios.post (`${port}/therapists/login`, userData)
			.then((response) => {
				console.log(response.status, response.data)
				sessionStorage.token = response.data.token
				setToken(response.data.token)
				navigate(`/therapisthome/${response.data.user.id}`)
			})
			.catch(error => {
				console.error(error);
			});
		}
			else {
				setFormSubmission(true);
				alert('Please fill in both fields.');
			}

	};

	return (
		<section className="login-page">
			<article className="loginIcon-container">
				<img className="loginIcon" src={LoginImage} />
			</article>
			<header className="login-title">
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
};

export default LoginPage;