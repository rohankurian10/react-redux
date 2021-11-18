import "./CenteredContainer.css";
import { useSelector } from "react-redux";

const CenterContainer = () => {
  //   const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="CenteredContainer">
      <div className="TitleContainer">
        <h2>REDUX COUNTER</h2>
      </div>
      <div className="CounterContainer">
        <p>{counter}</p>
      </div>
      <div className="ButtonContainer">
        <button onClick="IncrementCounter">Increment</button>
        <button>Change</button>
        <button onClick="DecrementCounter">Decrement</button>
      </div>
    </div>
  );
};

export default CenterContainer;
