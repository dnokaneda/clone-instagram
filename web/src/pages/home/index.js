import React from 'react';
import Header from '../../components/header';
import Card from '../../components/card';

import Foto from '../../assets/img/foto.jpg';
import img_01 from '../../assets/img/img_01.jpg';
import img_02 from '../../assets/img/img_02.jpg';
import img_03 from '../../assets/img/img_03.jpg';
import img_04 from '../../assets/img/img_04.jpg';

import './style.css';

const Home = () => {

  return(
    <>
    <Header />
    <Card userFoto={Foto} postFoto={img_01} />
    <Card userFoto={Foto} postFoto={img_02} />
    <Card userFoto={Foto} postFoto={img_03} />
    <Card userFoto={Foto} postFoto={img_04} />    
    </>
  )
}

export default Home;
