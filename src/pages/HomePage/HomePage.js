import './HomePage.scss';
import Logo from '../../assets/hive.svg';
import { Link } from 'react-router-dom';

const HomePage = () => {

	return (
		<section className='homepage'>
			<img className='homepage__logo' src={Logo} />
			<p className='homepage__slogan'>Streamlining speech and language therapy for all.</p>
			<div className='homepage__buttons'>
				<Link to="/login">
					<button className='homepage__buttons-login'>LOGIN</button>
				</Link>

				<Link to="/register">
					<button className='homepage__buttons-signup'>SIGN UP</button>
				</Link>
			</div>

		</section>
	);
};

export default HomePage;