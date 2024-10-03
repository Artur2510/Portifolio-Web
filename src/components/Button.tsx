import '../styles/Button.css'

function Button() {
  return(
    <button className='class-button'>
     
      <a href="https://www.linkedin.com/in/artur-bicalho/" target="_blank">
        <img className='class-logo-linkedin' src="/imagens/logo-linkedin.png" alt="Logo do linkedin" />
        <span className='Linkedin-text'>Linkedin</span>
      </a>
      </button>
  )
};

export default Button;