import { Provider } from "react-redux";
import Router from "./components/Router";
import Header from "./components/Header";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Router/>
    </Provider>
  );
}

export default App;