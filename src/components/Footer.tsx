import '../styles/Footer.css';
import Button from './Button';

function Footer() {
  return (
    <footer className="class-footer">
      <div className="footer-links">
        <Button
          href="https://www.linkedin.com/in/artur-bicalho/"
          imgSrc="/imagens/linkedin.svg"
          altText="Logo do Linkedin"
          text=""
        />
        <Button
          href="https://github.com/Artur2510"
          imgSrc="/imagens/github-image-icon.svg"
          altText="Logo do GitHub"
          text=""
        />
        <Button
          href="mailto:arturamosbicalho@hotmail.com?subject=Vi%20seu%20portfólio&body=Fale%20comigo%20por%20aqui"
          imgSrc="/imagens/email.svg"
          altText="Ícone de E-mail"
          text=""
        />
        <Button
          href="https://wa.link/f3w9s0"
          imgSrc="/imagens/whatsapp.svg"
          altText="Ícone do WhatsApp"
          text=""
        />
      </div>
      <h4>Desenvolvido por Artur Ramos Bicalho</h4>
    </footer>
  );
}

export default Footer;
