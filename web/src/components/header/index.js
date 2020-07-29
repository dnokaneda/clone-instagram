import React from 'react';
import { IoMdHome, IoMdPaperPlane, IoMdCompass, IoMdHeartEmpty } from "react-icons/io";

import './style.css';
import Logo from '../../assets/img/Instagram_logo.png';
import Foto from '../../assets/img/foto.jpg';

const Header = () => {
  return(
   <>
      <div className="header-container">
         <div className="header-body">
            <div className="header-logo">
               <img src={Logo} alt="Instagram" />
            </div>
            <div className="header-pesquisa">
               <input type="text" placeholder="Pesquisar" />
            </div>
            <div>
               <IoMdHome size={26} className="header-icones" />
               <IoMdPaperPlane size={26} className="header-icones" />
               <IoMdCompass size={26} className="header-icones" />
               <IoMdHeartEmpty size={26} className="header-icones" />
               <img src={Foto} alt="Foto" className="header-foto" />
            </div>
         </div>
      </div>
   </>
  )
}

export default Header;
