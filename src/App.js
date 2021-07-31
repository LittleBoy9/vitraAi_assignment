import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";

import Page1 from "./view/page1/";
import Page2 from "./view/page2/";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
