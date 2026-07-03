import "../styles/Button.css";

function Button({ text, type }) {
  return (
    <button type={type} className="btn">
      {text}
    </button>
  );
}

export default Button;