import './HomePage.scss'
import Logo from '../assets/logo.svg'

const HomePage = () => {
	return (
		<section className='homepage'>
			<h1 className='homepage__header'>The Hive</h1>
			<img className='homepage__logo' src={Logo} />
			<div className='homepage__buttons'>
				<button className='homepage__buttons-login'>Login</button>
				<button className='homepage__buttons-signup'>Sign Up</button>
			</div>

		</section>
	);
};

export default HomePage;