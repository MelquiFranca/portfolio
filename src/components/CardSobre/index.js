import React from 'react';
import { Icon } from 'react-icons-kit';
import { facebook, instagram, linkedin, github } from 'react-icons-kit/icomoon/';
import avatar from '../../assets/Melqui.png';
import './style.css';

export default function CardSobre() {
    return (<div className="card-corpo" id="sobre">
        <div className="card-principal">
            <img src={avatar} alt="" className="card-imagem"/>
            <div className="conteudo">
                <div className="superior">
                    <span className="ola">Olá</span>
                    <div className="saudacao">
                        Eu sou <span>Melquisedeque Pereira França</span>
                    </div>
                    <div className="funcao">
                        Programador FullStack
                    </div>
                </div>
                <div className="inferior">
                    <div>
                        <label >IDADE</label> <span>29</span>
                    </div>
                    <div>
                        <label>ENDEREÇO</label> <span>Rua Monteiro Lobato 183, Barreto - Niterói - RJ</span>
                    </div>
                    <div>
                        <label>EMAIL</label> <span>melquifranca@hotmail.com</span>
                    </div>
                    <div>
                        <label>FORMAÇÃO</label> <span>Cursando 8º Período em Sistemas de Informação</span>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="card-rodape">
            <ul className="social-lista">
                <a href="https://www.linkedin.com/in/melquifranca" className="social-item" target="blank">
                    <Icon icon={linkedin} size={22}/>
                </a>
                <a href="" className="social-item" target="blank">
                    <Icon icon={facebook} size={22}/>
                </a>
                <a href="https://www.instagram.com/melquisedeque_franca" className="social-item" target="blank">
                    <Icon icon={instagram} size={22}/>
                </a>
                <a href="https://www.github.com/melquifranca" className="social-item" target="blank">
                    <Icon icon={github} size={22}/>
                </a>
            </ul>
        </div>
    </div>);
}