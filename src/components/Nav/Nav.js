import './Nav.scss';
import { useNavigate } from "react-router-dom";
import hive from '../../assets/hivelogo.svg'


function Nav( ) {

	const navigate = useNavigate();


	const logOut = (e) => {
		e.preventDefault();
		sessionStorage.removeItem('token');
		navigate('/home')

	}


	return (
			<div className='nav' >
				<img className='nav__logo' src={hive}/>
				{/* <h1 className='nav__header'>hi</h1> */}
				<button 
				onClick={logOut}
				size="medium" variant="contained" className='nav__button'>LOGOUT</button>
			</div>
	);
}

export default Nav;