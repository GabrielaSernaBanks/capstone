import HomeIcon from '../../assets/home.svg';
import FileIcon from '../../assets/filefolder.svg';
import './Footer.scss';
import { Link } from 'react-router-dom';




function Footer() {
  return (

    <div className='footer'>
      <Link to={`/therapisthome`}>
      <img className='footer__homeicon' src={HomeIcon} />
      </Link>
  
      <img className='footer__fileicon' src={FileIcon} />
    </div>
  );
}

export default Footer;