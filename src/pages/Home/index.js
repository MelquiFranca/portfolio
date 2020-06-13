import React, { useState } from 'react';

import Header from '../../components/Header';
import CardSobre from '../../components/CardSobre';
import CardExperiencia from '../../components/CardExperiencia';
import Preload from '../../components/Preload';
import Mensagem from '../../components/Mensagem';
import Skills from '../../components/Skills';

import './style.css';

import empresa1 from '../../assets/empresa_1.png';
import empresa2 from '../../assets/empresa_2.png';

const cargos = [
    {imagem: empresa1, cargo: "Analista de Suporte Jr", descricao: "Processamento e Integração de dados entre sistemas, referentes à informações de Compras e Vendas.", data: "2013 - 2018"},
    {imagem: empresa2, cargo: "Programador Fullstack Jr", descricao: "Desenvolvimento e manutenção de Sistemas Web, principalmente com PHP.", data: "2018 - 2020"},
    {imagem: empresa1, cargo: "Analista de Suporte Jr", descricao: "Processamento e Integração de dados entre sistemas, referentes à informações de Compras e Vendas.", data: "2013 - 2018"},
    {imagem: empresa2, cargo: "Programador Fullstack Jr", descricao: "Desenvolvimento e manutenção de Sistemas Web, principalmente com PHP.", data: "2018 - 2020"},
    {imagem: empresa1, cargo: "Analista de Suporte Jr", descricao: "Processamento e Integração de dados entre sistemas, referentes à informações de Compras e Vendas.", data: "2013 - 2018"},
    {imagem: empresa2, cargo: "Programador Fullstack Jr", descricao: "Desenvolvimento e manutenção de Sistemas Web, principalmente com PHP.", data: "2018 - 2020"},
    {imagem: empresa1, cargo: "Analista de Suporte Jr", descricao: "Processamento e Integração de dados entre sistemas, referentes à informações de Compras e Vendas.", data: "2013 - 2018"},
    {imagem: empresa2, cargo: "Programador Fullstack Jr", descricao: "Desenvolvimento e manutenção de Sistemas Web, principalmente com PHP.", data: "2018 - 2020"},
    {imagem: empresa1, cargo: "Analista de Suporte Jr", descricao: "Processamento e Integração de dados entre sistemas, referentes à informações de Compras e Vendas.", data: "2013 - 2018"},
    {imagem: empresa2, cargo: "Programador Fullstack Jr", descricao: "Desenvolvimento e manutenção de Sistemas Web, principalmente com PHP.", data: "2018 - 2020"},
];

const skills = [
    {nome: "PHP", nivel: 80},
    {nome: "JAVASCRIPT", nivel: 80},
    {nome: "NODE JS", nivel: 80},
    {nome: "HTML", nivel: 100},
    {nome: "CSS", nivel: 100},
    {nome: "REACT JS", nivel: 70},
    {nome: "REACT NATIVE", nivel: 30},
    {nome: "SQL", nivel: 80},
    {nome: "MONGODB", nivel: 30},
]

export default function Home() {
    const [exibePreload, setExibePreload] = useState(true);
    const [exibeMensagem, setExibeMensagem] = useState(false);

    setTimeout(function() {
        setExibePreload(false);
    }, 3000);
    
    function alterarHeader(e) {
        const corpo = document.querySelector('#corpo-principal');
        corpo.addEventListener('scroll', () => {
            console.log("TTESTE");
        });
        
    }
    return (exibePreload && <Preload /> || <div className="container" id="corpo-principal">        
        {exibeMensagem && <Mensagem ocultaMensagem={setExibeMensagem}/>}
        <Header exibeMensagem={setExibeMensagem}/>
        <CardSobre />
        <div className="painel">            
        </div>

        <h3 className="titulo">Skills Profissionais</h3>
        <Skills skills={skills}/>


        <h3 className="titulo">Trabalhos</h3>
        <CardExperiencia dados={cargos}/>                
        
    </div>);
}