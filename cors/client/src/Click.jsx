const Click = ({ onButtonClick, onResetClick }) => {
  return (
    <div>
      <button onClick={onButtonClick}>Click Me</button>
      <button onClick={onResetClick}>Reset</button>
    </div>
  );
};

export default Click;
