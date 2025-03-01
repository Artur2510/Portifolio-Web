import React from 'react';
import '../styles/Formacao.css';
import { Education } from '../types/types';
import { educationData } from '../data/educationData';

const Formacao: React.FC = () => {
  return (
    <section id="sectionFormacao" className="formacao">
      <h2 className="formacao-title">Formação</h2>
      <div className="formacao-container">
        {educationData.map((item: Education) => (
          <div key={item.id} className="formacao-item">
            <h3 className="formacao-degree">{item.degree}</h3>
            <p className="formacao-institution">{item.institution}</p>
            <p className="formacao-year">{item.year}</p>
            <p className="formacao-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formacao;
