import { state } from "./configuration/store";
import { Provider } from "react-redux";

import Home from "./container/home";

function App() {
  return (
    <Provider store={state}>
      <Home />
    </Provider>
  );
}

export default App;
