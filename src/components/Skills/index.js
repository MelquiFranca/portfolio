import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './style.css';

export default function Skills({skills}) {
    return (<div className="corpo-skills" id="skills">
        {skills.map(skill => <div className="skill">
            <p className="nome">{skill.nome}</p>
            <LinearProgress variant="determinate" value={skill.nivel} classes={{barColorPrimary: "minha"}}/>
        </div>)}
    </div>);
}