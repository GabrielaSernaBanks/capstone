import './HomePage.scss';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const HomePage = () => {

	return (
		<section className='homepage'>
			<h1 className='homepage__header'>The Hive</h1>
			<img className='homepage__logo' src={Logo} />
			<div className='homepage__buttons'>
				<Link to="/login">
					<button className='homepage__buttons-login'>Login</button>
				</Link>

				<Link to="/register">
					<button className='homepage__buttons-signup'>Sign Up</button>
				</Link>
			</div>

		</section>
	);
};

export default HomePage;