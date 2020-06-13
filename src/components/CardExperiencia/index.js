import React from 'react';

import './style.css';

export default function CardExperiencia({dados}) {
    return (<div className="corpo-experiencia">
        {dados.map((item, key) =><div className="card-exp" key={key}>
                <div className="data-exp">{item.data}</div>
                <img src={item.imagem} alt="" className="imagem-exp"/>
                <h4>{item.cargo}</h4>
                <div>{item.descricao}</div>
            </div>)}            
    </div>);
}