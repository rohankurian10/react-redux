import "./CenteredContainer.css";

const CenterContainer = () => {
  return (
    <div className="CenteredContainer">
      <div className="TitleContainer">
        <h2>REDUX COUNTER</h2>
      </div>
      <div className="CounterContainer">
        <p>0</p>
      </div>
      <div className="ButtonContainer">
        <button>Increment</button>
        <button>Change</button>
        <button>Decrement</button>
      </div>
    </div>
  );
};

export default CenterContainer;
