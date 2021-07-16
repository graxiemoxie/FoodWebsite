import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "./components/Loader/Loader";
const Home = lazy(() => import("./pages/Home/Home"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Delivery = lazy(() => import("./pages/Delivery/Delivery"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ourMenu" component={Menu} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/contactUs" component={ContactUs} />
            <Route exact path="/delivery" component={Delivery} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
