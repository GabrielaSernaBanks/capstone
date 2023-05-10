import HomeIcon from '../../assets/home.svg';
import FileIcon from '../../assets/filefolder.svg';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <img className='footer__homeicon' src={HomeIcon} />
      <img className='footer__fileicon' src={FileIcon} />

    </div>
  );
}

export default Footer;