import './Nav.scss';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



function Nav() {
	return (
		<Box sx={{ '& button': { m: 1 } }}>
			<div className='nav' >
				<h1 className='nav__header'>The Hive</h1>
				<Button size="medium" variant="contained" className='nav__button'>LOGOUT</Button>
			</div>
		</Box>
	);
}

export default Nav;