import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROOT_PATH } from "./utils/contants";
import { Home } from "./containers";
import { useComponentWillMount } from "./components/useComponentWillMount";
import Navbar from "./components/NavBar";

function App() {
  const reconnect = () => {
    return "hey joe";
  };

  useComponentWillMount(() => {
    reconnect();
  });
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={ROOT_PATH} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
