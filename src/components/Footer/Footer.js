import HomeIcon from '../../assets/home.svg';
import FileIcon from '../../assets/filefolder.svg';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

function Footer({therapistID}) {
  return (

    <div className='footer'>
      <Link to={`/therapisthome/${therapistID}`}>
        <img className='footer__homeicon' src={HomeIcon} />
      </Link>
      <Link to={`/myjobs/${therapistID}`}>
        <img className='footer__fileicon' src={FileIcon} />
      </Link>
    </div>
  );
}

export default Footer;