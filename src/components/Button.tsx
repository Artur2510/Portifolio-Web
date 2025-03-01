import '../styles/Button.css';

interface ButtonProps {
  href: string;
  imgSrc: string;
  altText: string;
  text: string;
}

function Button({ href, imgSrc, altText, text }: ButtonProps) {
  return (
    <button className="class-button">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img className="button-icon" src={imgSrc} alt={altText} />
        <span className="button-text">{text}</span>
      </a>
    </button>
  );
}

export default Button;
