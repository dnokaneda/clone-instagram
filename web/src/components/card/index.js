import React from 'react';
import { IoMdPaperPlane, IoMdHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";

import './style.css';

const Card = ({ userFoto, postFoto }) => {
  return(
   <>
      <div className="card-container">
         
         <div className="card-header">
            <img src={userFoto} alt="Foto do usuário" />
            <BsThreeDots size={18} className="card-header-menu" />
         </div>

         <div className="card-photo">
            <img src={postFoto} alt="Foto do usuário" />
         </div>

         <div className="card-icones-container">
            <IoMdHeartEmpty  size={28} className="card-icones" />
            <IoMdPaperPlane  size={28} className="card-icones" />
            <FaRegComment  size={28} className="card-icones" />
            <FiBookmark  size={28} className="card-icones-right" />
            <p>1.000 visualizações</p>
         </div>

         <div className="card-comentarios-container">
            <p>
               <div>
                  <span>Usuário</span>
                  Texto de comentário
               </div>
               <IoMdHeartEmpty  size={14} className="card-comentarios-icone" />
            </p>
            <p className="card-comentarios-total"> Ver todos os 3 comentários </p>
            <div className="card-comentarios-tempo"> HÁ 2 HORAS </div>
         </div>

         <div className="card-novo-comentario-container">
            <input type="text" placeholder="Adicione um comentário..." ></input>
            <div className="button-novo-comentario">Publicar</div>
         </div>

      </div>
   </>
  )
}

export default Card;
