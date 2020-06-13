import React from 'react';
import { Icon } from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/';

import avatar from '../../assets/Melqui.png';
import './style.css';

export default function Mensagem({ ocultaMensagem }) {
    return (<div className="painel-mensagem">
        <div className="left" onClick={() => ocultaMensagem(false)}>
            <button type="button" className="btn-fechar">
                <Icon icon={cross} size={22}/>
            </button>
        </div>
        <div className="corpo-mensagem">
            <img src={avatar} alt="" className="avatar-mensagem"/>
            <h3 className="nome">Melquisedeque P. França</h3>

            <h4 className="titulo">Mensagem de Contato</h4>

            <input type="text" className="input-texto" placeholder="NOME"/>
            <input type="email" className="input-texto" placeholder="EMAIL"/>
            <textarea className="text-area">teste</textarea>

        </div>
    </div>);
}