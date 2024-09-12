import '../styles/About.css';

function About() {
    return(
      <section id='sectionSobre' className="class-about">
        <div className='class-div1'>
        <h2>SOBRE MIM</h2>
        <img src="/imagens/dev-img.jpeg" alt="Um Mini Dev Codando" />
        </div>
        <div className='class-div2'>
        <p>Sou um Desenvolvedor Web Front-End Junior em formação contínua pela Trybe, com experiência prática em HTML, CSS, JavaScript e React. Apaixonado por criar interfaces de usuário eficientes e acessíveis, já desenvolvi diversos projetos que simulam cenários reais do mercado. Tenho familiaridade com metodologias ágeis e versionamento de código usando Git. Estou sempre disposto a aprender novas tecnologias e contribuir em equipes de alta performance.</p>
        <p>Além disso, sou formado em Engenharia Mecânica, onde desenvolvi raciocínio lógico, análise de dados e a habilidade de resolver problemas complexos. Essas competências, combinadas com minha formação em tecnologia, me permitem abordar desafios de forma estruturada e eficiente, trazendo um diferencial analítico para a área de desenvolvimento web.</p>
        </div>
      </section>
    )
  };
  
  export default About;