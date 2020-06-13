import React from 'react';
import { Icon } from 'react-icons-kit';
import { envelop } from 'react-icons-kit/icomoon/';
import './style.css';

export default function Header({exibeMensagem}) {
    return (<div className="header">
        <div className="logo">
            MF
        </div>
        <ul className="menu">
            <a href="#sobre" className="item-menu">SOBRE</a>
            <a href="skills" className="item-menu">SKILLS</a>
            <a className="item-menu">PORTIFÓLIO</a>
            <a href="experiencia" className="item-menu">EXPERIÊNCIA</a>
            <a className="item-menu">CONTATO</a>
        </ul>

        <div className="outro">
            <button type="" onClick={() => exibeMensagem(true)}>
                <Icon icon={envelop} size={24}/>
            </button>
        </div>
    </div>);
}