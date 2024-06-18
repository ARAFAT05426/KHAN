import "./Button1.css";

const Button1 = ({ title, subtitle,onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="button1"
        style={{
          "--title": `'${title}'`,
          "--subtitle": `'${subtitle}'`,
        }}
      >
      </button>
    </div>
  );
};

export default Button1;
