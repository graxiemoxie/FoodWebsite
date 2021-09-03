import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "./components/Loader/Loader";
const Home = lazy(() => import("./pages/Home/Home"));
const MenuPage = lazy(() => import("./pages/MenuPage/MenuPage"));
const Delivery = lazy(() => import("./pages/Delivery/Delivery"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ourMenu" component={MenuPage} />
            <Route exact path="/delivery" component={Delivery} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
