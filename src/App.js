import "./App.css";
import CenterContainer from "./components/CenterContainer";
// import { Provider } from "react-redux";
// import store from "./store/index";

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <CenterContainer />
      {/* </Provider> */}
    </div>
  );
}

export default App;
