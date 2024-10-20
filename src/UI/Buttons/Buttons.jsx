import "./Buttons.css";
const Buttons = (props) => {
  return (
    <div className="Btn">
      <button className={`default ${props.type}`}> {props.title}</button>
    </div>
  );
};

export default Buttons;
