import "./CenteredContainer.css";
import { useSelector, useDispatch } from "react-redux";

const CenterContainer = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const IncrementHandler = () => {
    dispatch({ type: "INC" });
  };
  const DecrementHandler = () => {
    dispatch({ type: "DEC" });
  };

  return (
    <div className="CenteredContainer">
      <div className="TitleContainer">
        <h2>REDUX COUNTER</h2>
      </div>
      <div className="CounterContainer">
        <p>{counter}</p>
      </div>
      <div className="ButtonContainer">
        <button onClick={IncrementHandler}>Increment</button>
        <button>Change</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default CenterContainer;
