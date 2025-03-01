import '../styles/About.css';

function About() {
  return (
    <section id="sectionSobre" className="about">
      <div className="about-left">
        <h2>Sobre</h2>
        <img src="/imagens/dev-img.jpeg" alt="Um Mini Dev Codando" />
      </div>
      <div className="about-right">
        <p>
          Sou um Desenvolvedor Web Full Stack em transição de carreira, com formação pela Trybe e experiência prática em HTML, CSS, JavaScript, TypeScript, React, Node.js e bancos de dados. Minha trajetória na Engenharia Mecânica me proporcionou um forte raciocínio lógico, análise de dados e habilidades para resolver problemas complexos – competências que aplico no desenvolvimento de soluções eficientes e escaláveis.
        </p>
        <p>
          Tenho experiência com metodologias ágeis, versionamento de código com Git e já desenvolvi diversos projetos práticos que simulam desafios reais do mercado. Busco uma oportunidade como Desenvolvedor Júnior para aplicar meus conhecimentos, aprimorar minhas habilidades e contribuir ativamente para o crescimento da equipe e da empresa. Sou motivado pelo aprendizado contínuo e entusiasmado para enfrentar novos desafios na área de tecnologia.
        </p>
      </div>
    </section>
  );
}

export default About;
