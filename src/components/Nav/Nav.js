import './Nav.scss';
import { useNavigate } from "react-router-dom";



function Nav( ) {

	const navigate = useNavigate();


	const logOut = (e) => {
		e.preventDefault();
		sessionStorage.removeItem('token');
		navigate('/home')

	}


	return (
			<div className='nav' >
				<h1 className='nav__header'>The Hive</h1>
				<button 
				onClick={logOut}
				size="medium" variant="contained" className='nav__button'>LOGOUT</button>
			</div>
	);
}

export default Nav;